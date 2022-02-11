import { style } from '@vanilla-extract/css';

export const wrapper = style({
  outline: 'none',
  cursor: 'pointer',
});

export const noStyles = style({
  color: 'currentColor',
  textDecoration: 'none',
  /**
   * States
   */
  ':hover': {
    color: 'currentColor',
  },
  ':active': {
    color: 'currentColor',
  },
  ':focus': {
    color: 'currentColor',
  },
});
