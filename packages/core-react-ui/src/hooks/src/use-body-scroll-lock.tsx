import { useEffect, useRef } from 'react';

import { isIOS } from '../utilities-browser/useragent.utilities.js';
import { debugInstance, NS } from '../utilities-iso/log.utilities.js';

import { useIsSSR } from './use-is-ssr.js';

const log = debugInstance(`${NS}:body-scroll-lock`);
const logWarn = debugInstance(`${NS}:body-scroll-lock:warn`);
const logError = debugInstance(`${NS}:body-scroll-lock:error`);

export interface BodyScrollOptions {
  reserveScrollBarGap?: boolean;
  hideBodyOverflow?: boolean;
  allowTouchMove?: (el: any) => boolean;
}

interface Lock {
  targetElement: any;
  options: BodyScrollOptions;
}

type HandleScrollEvent = TouchEvent;

/**
 * Prevent scrolling to happen on the document and body by handling touchmove and pointermove events.
 *
 * @description Adopted and modified solution from Bohdan Didukh (2017)
 * @see https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
 * @see https://pqina.nl/blog/how-to-prevent-scrolling-the-page-on-ios-safari/
 */
export function useBodyScrollLock({
  disableDocumentScrolling,
  ref,
}: {
  disableDocumentScrolling?: boolean;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}) {
  /**
   *
   * Refs
   *
   */

  let locksRef = useRef<Array<Lock>>([]);
  let locks = locksRef.current || [];
  let documentListenerAddedRef = useRef<boolean>(false);
  let documentListenerAdded = documentListenerAddedRef.current;
  let initialClientYRef = useRef<number>(-1);
  let initialClientY = initialClientYRef.current;
  /** used to restore scrolling position */
  let previousBodyScrollPositionRef = useRef<number | undefined>(undefined);
  let previousBodyScrollPosition = previousBodyScrollPositionRef.current;
  /** used to restore the overflow when re-enabling scrolling */
  let previousBodyOverflowSettingRef = useRef<string | undefined>(undefined);
  let previousBodyOverflowSetting = previousBodyOverflowSettingRef.current;

  /** not used */
  let previousBodyPaddingRightRef = useRef<string | undefined>(undefined);
  let previousBodyPaddingRight = previousBodyPaddingRightRef.current;

  const isSSR = useIsSSR();

  /**
   *
   * Event handlers
   *
   */

  const preventDefaultTouch = (rawEvent: HandleScrollEvent | TouchEvent): boolean => {
    const e = rawEvent || window.event;
    log('handling touchevent event');

    // For the case whereby consumers adds a touchmove event listener to window.
    // Recall that we do window.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (allowTouchMove(e.target)) {
      log('allowed touchmove event');
      return true;
    }
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1) {
      return true;
    }

    if (e.preventDefault) {
      log('prevented touchmove event');
      e.preventDefault();
    }

    return false;
  };

  const preventDefaultPointer = (rawEvent: PointerEvent): boolean => {
    const e = rawEvent || window.event;
    log('handling pointermove event');
    log(window.innerHeight);

    // For the case whereby consumers adds a touchmove event listener to window.
    // Recall that we do window.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (allowTouchMove(e.target)) {
      log('allowed pointermove event');
      return true;
    }
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    // if (e.touches.length > 1) {
    //   return true;
    // }

    if (e.preventDefault) {
      log('prevented pointermove event');
      e.preventDefault();
      e.stopPropagation();
    }

    return false;
  };

  /**
   * Returns true if `el` should be allowed to receive touchmove events.
   */
  const allowTouchMove = (el: EventTarget | null): boolean =>
    locks.some((lock) => {
      if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
        return true;
      }

      return false;
    });

  const isIosDevice = isIOS;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
  const isTargetElementTotallyScrolled = (targetElement: any): boolean =>
    targetElement
      ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight
      : false;

  const target = ref?.current;

  /**
   * Side effects below
   */

  useEffect(() => {
    if (isSSR) {
      return;
    }

    if (!target) {
      return;
    }

    const handleScroll = (event: HandleScrollEvent, targetElement: any): boolean => {
      log(`handling scroll on element`);
      const clientY = event.targetTouches[0].clientY - initialClientY;

      if ((event as any).scale && (event as any).scale !== 1) {
        log(`prevented zoom`);
        event.preventDefault();
      }

      if (allowTouchMove(event.target)) {
        log(`touch move allowed`);
        return false;
      }

      if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll.
        return preventDefaultTouch(event);
      }

      if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        // element is at the bottom of its scroll.
        return preventDefaultTouch(event);
      }

      log(`prevented zoom`);
      event.stopPropagation();
      event.stopImmediatePropagation();
      return true;
    };

    const handleScrollPointer = (event: PointerEvent, targetElement: any): boolean => {
      log(`handling scroll on element (PointerEvent)`);
      const clientY = event.clientY - initialClientY;

      if (allowTouchMove(event.target)) {
        log(`(PointerEvent) touch move allowed`);
        return false;
      }

      if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll.
        return preventDefaultPointer(event);
      }

      if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        // element is at the bottom of its scroll.
        return preventDefaultPointer(event);
      }

      event.stopPropagation();
      event.stopImmediatePropagation();
      return true;
    };

    const setOverflowHidden = (options?: BodyScrollOptions) => {
      previousBodyOverflowSetting = window.document.documentElement.style.overflow;
      window.document.body.style.overflow = 'hidden';
      //
      // update with iOS 15: we let the body height intact
      //
      // previousBodyScrollPosition = window.scrollY;
      // window.document.body.style.height = `${window.innerHeight}px`;
    };

    const restoreOverflowSetting = () => {
      if (previousBodyOverflowSetting !== undefined) {
        window.requestAnimationFrame(() => {
          window.document.body.style.overflow = previousBodyOverflowSetting || 'initial';

          //
          // update with iOS 15: we let the body height intact
          //
          // window.document.body.style.height = 'initial';
        });
      }

      //
      // update with iOS 15: we let the body height intact
      //
      // if (previousBodyScrollPosition !== undefined) {
      //   window.scrollTo(0, previousBodyScrollPosition);
      // }
    };

    const disableBodyScroll = (targetElement: HTMLElement, options?: BodyScrollOptions): void => {
      // targetElement must be provided
      if (!targetElement) {
        logError(
          'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
        );
        return;
      }

      // disableBodyScroll must not have been called on this targetElement before
      if (locks.some((lock) => lock.targetElement === targetElement)) {
        return;
      }

      const lock = {
        targetElement,
        options: options || {},
      };

      locks = [...locks, lock];

      //
      // update with iOS 15: we let the target element height intact
      //
      // targetElement.style.maxHeight = `${window.innerHeight}px`;

      if (options?.hideBodyOverflow) {
        setOverflowHidden(options);
      }

      if (isIosDevice) {
        targetElement.ontouchstart = (event: HandleScrollEvent) => {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            initialClientY = event.targetTouches[0].clientY;
          }
        };
        targetElement.ontouchmove = (event: HandleScrollEvent) => {
          handleScroll(event, targetElement);
        };
        targetElement.onpointermove = (event: PointerEvent) => {
          handleScrollPointer(event, targetElement);
        };

        if (!documentListenerAdded) {
          window.document.addEventListener('touchmove', preventDefaultTouch, {
            passive: false,
          });
          window.document.addEventListener('pointermove', preventDefaultPointer, {
            passive: false,
          });

          documentListenerAdded = true;
        }
      }
    };

    const enableBodyScroll = (targetElement: any): void => {
      if (!targetElement) {
        logError(
          'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
        );
        return;
      }

      const isBodyOverflowHidden =
        !isIosDevice || !!locks.find((lock) => lock.options.hideBodyOverflow);

      // remove the target element from locks
      locks = locks.filter((lock) => lock.targetElement !== targetElement);

      //
      // update with iOS 15: we let the target element height intact
      //
      // targetElement.style.maxHeight = ``;

      if (isIosDevice) {
        targetElement.ontouchstart = null;
        targetElement.ontouchmove = null;
        targetElement.onpointermove = null;

        if (documentListenerAdded) {
          window.document.removeEventListener('touchmove', preventDefaultTouch);
          window.document.removeEventListener('pointermove', preventDefaultPointer);
          documentListenerAdded = false;
        }
      }

      if (isBodyOverflowHidden) {
        restoreOverflowSetting();
      }
    };

    if (disableDocumentScrolling) {
      log('disabling scroll');
      disableBodyScroll(target, {
        hideBodyOverflow: true,
        allowTouchMove: (element) => element === target,
      });
    }

    if (disableDocumentScrolling === false) {
      log('enabling scroll');
      enableBodyScroll(target);
    }

    return () => {
      log('cleaning up');
      target.ontouchstart = null;
      target.ontouchmove = null;
      target.onpointermove = null;
      enableBodyScroll(target);
    };
  }, [target, disableDocumentScrolling, isIosDevice]);

  return [locks];
}
