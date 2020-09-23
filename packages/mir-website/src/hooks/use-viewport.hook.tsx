import React from 'react';
import { ViewportContext } from '../context/viewport.context';
import { VIEWPORT } from '@newrade/core-design-system';
import { DEFAULT_LAYOUT } from '@newrade/core-react-ui';

// singleton
export const viewportContext = React.createContext<ViewportContext>({});

export function useViewportValues(): ViewportContext {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

export function useViewportBreakpoint(): { viewport: VIEWPORT } {
  const { width } = React.useContext(viewportContext);

  const tabletBreakpoint = DEFAULT_LAYOUT.breakpoints.tabletPortrait.value;
  const desktopBreakpoint = DEFAULT_LAYOUT.breakpoints.desktopSmall.value;

  if (width !== undefined && width < tabletBreakpoint) {
    return { viewport: VIEWPORT.mobile };
  }

  if (width !== undefined && width < desktopBreakpoint) {
    return { viewport: VIEWPORT.tablet };
  }

  return { viewport: VIEWPORT.desktop };
}
