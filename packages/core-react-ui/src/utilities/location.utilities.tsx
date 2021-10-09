import React from 'react';

/**
 * Scroll element into view using an id or selector
 */
export function scrollIntoView({
  selector,
  id,
  event,
}: {
  selector?: string;
  id?: string;
  event?: React.MouseEvent;
}) {
  const isSSR = typeof window === 'undefined';

  if (isSSR) {
    return;
  }
  const normalizedId = id ? (/^#/.test(id) ? id.replace('#', '') : id) : '';
  const idOrSelector = selector ? selector : id ? `#${normalizedId}` : '';
  if (!idOrSelector) {
    return;
  }

  const scrollTarget = document.querySelector(idOrSelector);
  if (!scrollTarget) {
    return;
  }

  if (event) {
    event.preventDefault();
  }

  // for modern browser
  const supportSmooth = 'scrollBehavior' in document.documentElement.style;
  if (supportSmooth) {
    scrollTarget.scrollIntoView({
      behavior: 'smooth',
    });
    return;
  }
  // for safari
  if (id) {
    window.location.hash = id;
  }
}
