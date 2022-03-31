import { globalStyle, style } from '@vanilla-extract/css';

import { colorVars, layoutVars } from '../theme';

export const wrapper = style({
  top: 0,

  display: 'grid',
  alignItems: 'center',
  width: '100%',

  height: layoutVars.var.navbarHeight,
  maxHeight: layoutVars.var.navbarHeight,
  color: colorVars.colorIntents.primaryText,
  backgroundColor: colorVars.colorIntents.elevation2,
  boxShadow: `rgba(33, 33, 33, 0.15) 0px 1px 2px`,
  zIndex: layoutVars.zIndex.navBar,
});

globalStyle(`${wrapper} *`, {
  userSelect: 'none',
});

/**
 *
 * Modes
 *
 */

export const fixed = style({
  position: 'fixed',
});

export const normal = style({
  position: 'static',
});

/**
 *
 * Variants
 *
 */

export const primary = style({});

export const secondary = style({});

export const tertiary = style({});
