import { colorVars, layoutVars, sizingVars } from '@newrade/core-react-ui/theme';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  border: `1px solid ${colorVars.colors.grey[200]}`,
  overflow: `hidden`,
  borderRadius: 8,
});

export const header = style({
  display: 'grid',
  gap: sizingVars.sizes.desktop.x2,
  gridTemplateColumns: `repeat(auto-fit, 170px)`,
  padding: `${sizingVars.sizes.desktop.x2}`,
  borderBottom: `1px solid ${colorVars.colors.grey[200]}`,
});

export const content = style({
  // maxWidth: `min(calc(100vw - 2 * ${layoutVars.var.contentMargins}), var(--max-content-width))`,
  maxWidth: '100%',
  overflow: 'hidden',
});

/**
 *
 * iFrame
 *
 */

export const iframeWrapper = style({
  display: 'grid',
  width: '100%',
  maxWidth: '100%',
  overflowX: 'auto',
});

export const iframeDefaultViewport = style({
  width: '100%',
  maxWidth: '100%',
});

export const mobile = style({
  width: `calc(${layoutVars.var.breakpoints.tabletPortrait} - 1px)`,
  maxWidth: `calc(${layoutVars.var.breakpoints.tabletPortrait} - 1px)`,
});

export const tablet = style({
  width: layoutVars.var.breakpoints.tabletLandscape,
  maxWidth: layoutVars.var.breakpoints.tabletLandscape,
});

export const desktop = style({
  width: layoutVars.var.breakpoints.desktopSmall,
  maxWidth: layoutVars.var.breakpoints.desktopSmall,
});
