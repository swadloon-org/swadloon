import { createVar, globalStyle } from '@vanilla-extract/css';

/**
 *
 * Transitions
 *
 */

const transitionDuration = createVar();

globalStyle(`:root`, {
  vars: {
    [transitionDuration]: `200ms`,
  },
  transitionProperty: `color, background-color, border-color, scrollbar-color`,
  transitionDuration: transitionDuration,
  transitionTimingFunction: `ease-out`,
});
