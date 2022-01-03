import { createVar, globalStyle } from '@vanilla-extract/css';

/**
 *
 * Transitions
 *
 */

const transitionDuration = createVar();

globalStyle(`html, body`, {
  vars: {
    [transitionDuration]: `350ms`,
  },
  transitionProperty: `background, color, background-color, border-color, scrollbar-color, fill, stroke`,
  transitionDuration: transitionDuration,
  transitionTimingFunction: `ease-out`,
});
