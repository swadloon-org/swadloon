import React from 'react';
import { ViewportContext } from '../context/viewport';
import { VIEWPORT } from '@newrade/core-design-system';
import { defaultLayout } from '../design-system/default-layout';

// singleton
export const viewportContext = React.createContext<ViewportContext>({});

export function useViewportValues(): ViewportContext {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
}

export function useViewportBreakpoint(): { viewport: VIEWPORT } {
  const { width } = React.useContext(viewportContext);

  const tabletBreakpoint = defaultLayout.breakpoints.tabletPortrait;
  const desktopBreakpoint = defaultLayout.breakpoints.desktopSmall;

  if (width !== undefined && width < tabletBreakpoint) {
    return { viewport: VIEWPORT.mobile };
  }

  if (width !== undefined && width < desktopBreakpoint) {
    return { viewport: VIEWPORT.tablet };
  }

  return { viewport: VIEWPORT.desktop };
}
