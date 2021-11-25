import { useCallback, useEffect, useRef, useState } from 'react';

import { globalHistory } from '@reach/router';

import { VIEWPORT } from '@newrade/core-design-system';
import { useViewportBreakpoint } from '@newrade/core-react-ui';

type Props = {
  /**
   * Initial sidebarOpened of the sidebar
   * @default false
   */
  initial?: boolean;
  /**
   * Delay after which the sidebar is closed on desktop
   * @default 100
   */
  delayOpen?: number;
  delayClose?: number;
  /**
   * Controls if the sidebar automatically close when switching to desktop
   */
  autoCloseOnDesktop?: boolean;
};

export function useSidebarState({
  initial = false,
  delayOpen = 100,
  delayClose = 100,
  autoCloseOnDesktop = true,
}: Props): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(initial);
  const { viewport } = useViewportBreakpoint();
  let timeout = useRef<number | null>(null);
  let timeoutSetSidebarFn = useRef<number | null>(null);

  // automatically close the sidebar if the viewport is desktop
  useEffect(() => {
    if (!autoCloseOnDesktop) {
      return;
    }

    if (viewport === VIEWPORT.desktop && sidebarOpened) {
      timeout.current = window.setTimeout(() => {
        setSidebarOpened(false);
      }, delayClose);
    }

    return () => {
      if (timeout !== undefined && typeof timeout === 'number') {
        window.clearTimeout(timeout);
      }

      if (timeoutSetSidebarFn !== undefined && typeof timeoutSetSidebarFn === 'number') {
        window.clearTimeout(timeoutSetSidebarFn);
      }
    };
  }, [viewport, sidebarOpened, delayOpen, delayClose, autoCloseOnDesktop]);

  const setSidebarOpenedDelayedFn: (value: React.SetStateAction<boolean>, delay?: number) => void =
    useCallback(
      (value, delay) => {
        timeoutSetSidebarFn.current = window.setTimeout(
          () => {
            setSidebarOpened(value);
          },
          delay ? delay : value ? delayOpen : delayClose
        );
        return value;
      },
      [delayClose, delayOpen]
    );

  useEffect(() => {
    return globalHistory.listen((params) => {
      setSidebarOpenedDelayedFn(false, 600); // close sidebar upon navigation
    });
  }, [setSidebarOpenedDelayedFn]);

  return [sidebarOpened, setSidebarOpenedDelayedFn];
}
