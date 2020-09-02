import React from 'react';
import { ViewportContext } from '../context/viewport.context';
import { VIEWPORT } from 'core-design-system';
import { DEFAULT_LAYOUT } from 'core-react-ui';

// singleton
export const viewportContext = React.createContext<ViewportContext>({});

export function useViewportValues(): ViewportContext {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

export function useViewportBreakpoint(): { viewport: VIEWPORT } {
  const { width } = React.useContext(viewportContext);

  const tabletBreakpoint = DEFAULT_LAYOUT.breakpoints.TABLET_PORTRAIT.value;
  const desktopBreakpoint = DEFAULT_LAYOUT.breakpoints.DESKTOP_SMALL.value;

  if (width !== undefined && width < tabletBreakpoint) {
    return { viewport: VIEWPORT.MOBILE };
  }

  if (width !== undefined && width < desktopBreakpoint) {
    return { viewport: VIEWPORT.TABLET };
  }

  return { viewport: VIEWPORT.DESKTOP };
}
