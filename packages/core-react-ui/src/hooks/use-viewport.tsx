import React from 'react';

import { VIEWPORT } from '@newrade/core-design-system';

import { ViewportContext } from '../context/viewport.provider';
import { defaultLayout } from '../default-theme/default-layout';

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
