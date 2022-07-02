import { style } from '@vanilla-extract/css';

/**
 * Base
 */
export const base = style({
  display: 'block',
  ':focus': {
    outline: 'none',
  },
});

export const standard = style({
  maxHeight: 100,
});

export const symbol = style({
  maxHeight: 100,
});

export const favicon = style({
  maxHeight: 16,
});
