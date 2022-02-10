import { style } from '@vanilla-extract/css';

import { colorVars } from '../default-theme/default-theme.css';

/**
 *
 * Base
 *
 */

export const tab = style({
  display: 'block',
  position: 'relative',
  outline: 'none',
  lineHeight: 0,
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  touchAction: 'none',
  WebkitAppearance: 'none',
  whiteSpace: 'nowrap', // don't allow wrapping
  width: 'fit-content',
  ':focus': {
    // boxShadow: `0 0 0 1px ${cssTheme.colors.colors.primary[700]}`,
  },
  selectors: {
    '&[aria-selected=true]': {
      borderBottom: `2px solid ${colorVars.colorIntents.primary}`,
    },
  },
});

export const tabContent = style({
  display: 'grid',
  selectors: {
    '&[hidden]': {
      display: 'none',
    },
  },
});

export const tabList = style({
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'flex-start',
  borderBottom: `1px solid ${colorVars.colors.grey[200]}`,
});

export const tabs = style({
  display: 'grid',
});

/**
 *
 * States
 *
 */

export const rest = style({});
export const loading = style({});
export const disabled = style({});
export const active = style({});

/**
 *
 * Variants
 *
 */

export const primary = style({});

/**
 *
 * Sizes
 *
 */

export const medium = style({
  padding: `16px 24px 14px`,
});
