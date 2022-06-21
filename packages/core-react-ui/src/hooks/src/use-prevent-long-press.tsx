import { useEffect } from 'react';

import { isIOS } from '../utilities-browser/useragent.utilities.js';

type HandleScrollEvent = TouchEvent;

/**
 *
 * @see https://stackoverflow.com/questions/61855027/prevent-text-selection-on-tap-and-hold-on-ios-13-mobile-safari
 */
// TODO: measure the time between start and end and cancel only when the press is long to prevent text selection
export function usePreventLongPress(targetElement?: HTMLElement | Document | null) {
  const handleStartTouchEvent = (event: Event) => {
    event.returnValue = false;
  };

  const handleTouchEvent = (event: Event) => {
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
      targetElement.addEventListener('touchstart', handleStartTouchEvent);
      targetElement.addEventListener('touchmove', handleTouchEvent);
      targetElement.addEventListener('touchend', handleTouchEvent);
    }

    return () => {
      targetElement.removeEventListener('touchstart', handleStartTouchEvent);
      targetElement.removeEventListener('touchmove', handleTouchEvent);
      targetElement.removeEventListener('touchend', handleTouchEvent);
    };
  }, [targetElement]);
}
