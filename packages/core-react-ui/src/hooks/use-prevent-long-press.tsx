import { isIOS } from 'react-device-detect';
import { useEffect } from 'react';

type HandleScrollEvent = TouchEvent;

/**
 *
 * @see https://stackoverflow.com/questions/61855027/prevent-text-selection-on-tap-and-hold-on-ios-13-mobile-safari
 */
// TODO: measure the time between start and end and cancel only when the press is long to prevent text selection
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
      targetElement.addEventListener('touchstart', handleTouchEvent as any);
      targetElement.addEventListener('touchmove', handleTouchEvent as any);
      targetElement.addEventListener('touchend', handleTouchEvent as any);
    }

    return () => {
      targetElement.removeEventListener('touchstart', handleTouchEvent as any);
      targetElement.removeEventListener('touchmove', handleTouchEvent as any);
      targetElement.removeEventListener('touchend', handleTouchEvent as any);
    };
  }, [targetElement]);
}
