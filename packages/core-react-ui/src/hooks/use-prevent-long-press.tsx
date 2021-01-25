import { isIOS } from 'react-device-detect';
import { useEffect } from 'react';

type HandleScrollEvent = TouchEvent;

/**
 *
 * @see https://stackoverflow.com/questions/61855027/prevent-text-selection-on-tap-and-hold-on-ios-13-mobile-safari
 */
export function usePreventLongPress(targetElement?: HTMLElement | Document | null) {
  const handleTouchEvent = (event: HandleScrollEvent) => {
    event.returnValue = false;
  };

  useEffect(() => {
    if (!targetElement) {
      return () => {};
    }

    if (targetElement.nodeName !== 'BUTTON') {
      return () => {};
    }

    if (isIOS) {
      targetElement.addEventListener('touchmove', handleTouchEvent as any);
      targetElement.addEventListener('touchstart', handleTouchEvent as any);
      targetElement.addEventListener('touchend', handleTouchEvent as any);
    }

    return () => {
      targetElement.removeEventListener('touchmove', handleTouchEvent as any);
      targetElement.removeEventListener('touchstart', handleTouchEvent as any);
      targetElement.removeEventListener('touchend', handleTouchEvent as any);
    };
  }, [targetElement]);
}
