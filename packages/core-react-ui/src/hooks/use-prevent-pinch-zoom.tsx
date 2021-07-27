import { useEffect } from 'react';
import { isIOS } from '../utilities/useragent';

type HandleScrollEvent = TouchEvent;

// TODO: this breaks when scroll is already triggered and zoom happens
// @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW23
export function usePreventPinchZoom(targetElement?: HTMLElement | Document | null) {
  const handleTouchEvent = (event: HandleScrollEvent) => {
    if ((event as any).scale && (event as any).scale !== 1) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (!targetElement) {
      return () => {};
    }

    if (isIOS) {
      targetElement.addEventListener('touchmove', handleTouchEvent as any, {
        capture: false,
        passive: false,
      });
    }
  }, [targetElement]);

  return () => {
    if (!targetElement) {
      return;
    }

    targetElement.removeEventListener('touchmove', handleTouchEvent as any);
  };
}
