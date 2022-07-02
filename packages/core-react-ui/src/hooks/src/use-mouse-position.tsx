import React from 'react';

import throttle from 'lodash/throttle';

const events = new Set<(event: MouseEvent) => any>();
const onMouseMove = (event: MouseEvent) => events.forEach((fn) => fn(event));

export const useMousePosition = (options: { throttleMs?: number } = {}) => {
  const { throttleMs = 100 } = options;
  const [position, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const handle = throttle((event: MouseEvent) => {
      const x = event.clientX / innerWidth;
      const y = event.clientY / innerHeight;

      if (!x || !y) {
        return;
      }

      const root = document.documentElement;

      root.style.setProperty('--mouse-x', `${x}`);
      root.style.setProperty('--mouse-y', `${y}`);

      setMousePosition({
        x,
        y,
      });
    }, throttleMs);

    if (events.size === 0) {
      window.addEventListener('mousemove', onMouseMove, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('mousemove', onMouseMove, true);
      }
    };
  }, []);

  return position;
};
