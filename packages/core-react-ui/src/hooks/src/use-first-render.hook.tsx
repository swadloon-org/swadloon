import { useEffect, useRef } from 'react';

/**
 * Returns `true` when the first render occur
 * `false` afterwards
 */
export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}
