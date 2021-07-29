import { VIEWPORT } from '@newrade/core-design-system';
import { useViewportBreakpoint } from '@newrade/core-react-ui/src';
import { useEffect, useRef, useState } from 'react';

type Props = {
  /**
   * Initial sidebarOpened of the sidebar
   * @default false
   */
  initial?: boolean;
  /**
   * Delay after which the sidebar is closed on desktop
   * @default 300
   */
  delay?: number;
};

export function useSidebarState({
  initial = false,
  delay = 300,
}: Props): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(initial);
  const { viewport } = useViewportBreakpoint();
  let timeout = useRef<number | null>(null);

  // automatically close the sidebar if the viewport is desktop
  useEffect(() => {
    if (viewport === VIEWPORT.desktop && sidebarOpened) {
      timeout.current = window.setTimeout(() => {
        setSidebarOpened(false);
      }, delay);
    }

    return () => {
      if (timeout !== undefined && typeof timeout === 'number') {
        window.clearTimeout(timeout);
      }
    };
  }, [viewport, sidebarOpened, delay]);

  return [sidebarOpened, setSidebarOpened];
}
