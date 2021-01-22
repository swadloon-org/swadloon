// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

import { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';

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

export function useBodyScrollLock({
  disableScrolling,
  ref,
}: {
  disableScrolling?: boolean;
  ref: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const [locks, setLocks] = useState<Array<Lock>>([]);
  const [documentListenerAdded, setDocumentListenerAdded] = useState<boolean>(false);
  const [initialClientY, setInitialClientY] = useState<number>(-1);
  const [previousBodyOverflowSetting, setPreviousBodyOverflowSetting] = useState<string | undefined>(undefined);
  const [previousBodyPaddingRight, setPreviousBodyPaddingRight] = useState<string | undefined>(undefined);

  // Older browsers don't support event options, feature detect it.
  let hasPassiveEvents = true;

  // if (typeof window !== 'undefined') {
  //   const passiveTestOptions = {
  //     get passive() {
  //       hasPassiveEvents = true;
  //       return undefined;
  //     },
  //   };
  //   // @ts-ignore
  //   window.addEventListener('testPassive', null, passiveTestOptions);
  //   // @ts-ignore
  //   window.removeEventListener('testPassive', null, passiveTestOptions);
  // }

  const isIosDevice = isIOS;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
  const isTargetElementTotallyScrolled = (targetElement: any): boolean =>
    targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;

  /**
   * Side effects below
   */

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleScroll = (event: HandleScrollEvent, targetElement: any): boolean => {
      const clientY = event.targetTouches[0].clientY - initialClientY;

      if (allowTouchMove(event.target)) {
        return false;
      }

      if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll.
        return preventDefault(event);
      }

      if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        // element is at the bottom of its scroll.
        return preventDefault(event);
      }

      event.stopPropagation();
      return true;
    };

    // returns true if `el` should be allowed to receive touchmove events.
    const allowTouchMove = (el: EventTarget | null): boolean =>
      locks.some((lock) => {
        if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
          return true;
        }

        return false;
      });

    const preventDefault = (rawEvent: HandleScrollEvent | TouchEvent): boolean => {
      const e = rawEvent || window.event;

      // For the case whereby consumers adds a touchmove event listener to window.
      // Recall that we do window.addEventListener('touchmove', preventDefault, { passive: false })
      // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
      // the touchmove event on document will break.
      if (allowTouchMove(e.target)) {
        return true;
      }
      // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
      if (e.touches.length > 1) return true;

      if (e.preventDefault) e.preventDefault();

      return false;
    };

    const setOverflowHidden = (options?: BodyScrollOptions) => {
      // If previousBodyPaddingRight is already set, don't set it again.
      if (previousBodyPaddingRight === undefined) {
        const reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
        const scrollBarGap = window.innerWidth - window.document.documentElement.clientWidth;

        if (reserveScrollBarGap && scrollBarGap > 0) {
          const computedBodyPaddingRight = parseInt(
            getComputedStyle(window.document.documentElement).getPropertyValue('padding-right'),
            10
          );
          setPreviousBodyPaddingRight(window.document.documentElement.style.paddingRight);
          window.document.documentElement.style.paddingRight = `${computedBodyPaddingRight + scrollBarGap}px`;
        }
      }
      // If previousBodyOverflowSetting is already set, don't set it again.
      if (previousBodyOverflowSetting === undefined) {
        setPreviousBodyOverflowSetting(window.document.documentElement.style.overflow);
        window.document.documentElement.style.overflow = 'hidden';
      }
    };

    const restoreOverflowSetting = () => {
      if (previousBodyPaddingRight !== undefined) {
        window.document.documentElement.style.paddingRight = previousBodyPaddingRight;

        // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
        // can be set again.
        setPreviousBodyPaddingRight(undefined);
      }

      if (previousBodyOverflowSetting !== undefined) {
        window.document.documentElement.style.overflow = previousBodyOverflowSetting;

        // Restore previousBodyOverflowSetting to undefined
        // so setOverflowHidden knows it can be set again.
        setPreviousBodyOverflowSetting(undefined);
      }
    };

    const disableBodyScroll = (targetElement: any, options?: BodyScrollOptions): void => {
      // targetElement must be provided
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error(
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

      setLocks([...locks, lock]);

      if (!isIosDevice || options?.hideBodyOverflow) {
        setOverflowHidden(options);
      }

      if (isIosDevice) {
        targetElement.ontouchstart = (event: HandleScrollEvent) => {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            setInitialClientY(event.targetTouches[0].clientY);
          }
        };
        targetElement.ontouchmove = (event: HandleScrollEvent) => {
          if (event.targetTouches.length === 1) {
            // detect single touch.
            handleScroll(event, targetElement);
          }
        };

        if (!documentListenerAdded) {
          window.document.documentElement.addEventListener('touchmove', preventDefault);
          setDocumentListenerAdded(true);
        }
      }
    };

    const clearAllBodyScrollLocks = (): void => {
      let isBodyOverflowHidden = !isIosDevice;
      if (isIosDevice) {
        // Clear all locks ontouchstart/ontouchmove handlers, and the references.
        locks.forEach((lock: Lock) => {
          lock.targetElement.ontouchstart = null;
          lock.targetElement.ontouchmove = null;
          if (lock.options.hideBodyOverflow) {
            isBodyOverflowHidden = true;
          }
        });

        if (documentListenerAdded) {
          window.document.documentElement.removeEventListener('touchmove', preventDefault);
          setDocumentListenerAdded(false);
        }
        // Reset initial clientY.
        setInitialClientY(-1);
      }

      if (isBodyOverflowHidden) {
        restoreOverflowSetting();
      }

      setLocks([]);
    };

    const enableBodyScroll = (targetElement: any): void => {
      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.error(
          'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
        );
        return;
      }

      const isBodyOverflowHidden = !isIosDevice || !!locks.find((lock) => lock.options.hideBodyOverflow);
      setLocks(locks.filter((lock) => lock.targetElement !== targetElement));

      if (isIosDevice) {
        targetElement.ontouchstart = null;
        targetElement.ontouchmove = null;

        if (documentListenerAdded && locks.length === 0) {
          window.document.documentElement.removeEventListener('touchmove', preventDefault);
          setDocumentListenerAdded(false);
        }
      }

      if (isBodyOverflowHidden) {
        restoreOverflowSetting();
      }
    };

    if (disableScrolling) {
      disableBodyScroll(ref.current);
    }

    if (disableScrolling === false) {
      enableBodyScroll(ref.current);
    }
  }, [ref.current, disableScrolling]);

  return [locks, documentListenerAdded];
}
