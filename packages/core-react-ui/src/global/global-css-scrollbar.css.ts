import { createVar, globalStyle } from '@vanilla-extract/css';

import { colorVars } from '../theme';

/**
 * Scrollbars
 *
 * @see https://css-tricks.com/almanac/properties/s/scrollbar/
 * @see https://css-tricks.com/the-current-state-of-styling-scrollbars/
 *
 * ::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
 * ::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
 * ::-webkit-scrollbar-track addresses the empty space “below” the progress bar
 * ::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
 * ::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
 * ::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
 * ::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
 */

const scrollBarBackground = createVar();
const scrollBarWidth = createVar();
const scrollBarHeight = createVar();
const scrollBarThumbWidth = createVar();
const scrollBarThumbBorderWidth = createVar();
const scrollBarThumbBorderColor = createVar();
const scrollBarThumbBackground = createVar();
const scrollBarThumbRadius = createVar();

globalStyle(`:root`, {
  vars: {
    [scrollBarBackground]: colorVars.colorIntents.elevation0,
    [scrollBarWidth]: '12px',
    [scrollBarHeight]: '12px',
    [scrollBarThumbWidth]: '12px',
    [scrollBarThumbBorderWidth]: '2px',
    [scrollBarThumbBorderColor]: colorVars.colorIntents.elevation0,
    [scrollBarThumbRadius]: '10px',
    [scrollBarThumbBackground]: colorVars.colors.grey[300],
  },
});

globalStyle(`*::-webkit-scrollbar`, {
  scrollbarWidth: `${scrollBarWidth}`,
  scrollbarColor: `${scrollBarThumbBackground}`,
});

globalStyle(`*::-webkit-scrollbar`, {
  width: scrollBarWidth,
  height: scrollBarHeight, // only applies for horizontal scrollbars
  backgroundColor: scrollBarBackground,
});

globalStyle(`*::-webkit-scrollbar-track`, {
  borderRadius: scrollBarThumbRadius,
  backgroundColor: scrollBarBackground,

  WebkitBoxShadow: 'none',
});

globalStyle(`*::-webkit-scrollbar-thumb`, {
  borderRadius: scrollBarThumbRadius,
  backgroundColor: scrollBarThumbBackground,
  borderWidth: `${scrollBarThumbBorderWidth}`,
  borderStyle: `solid`,
  borderColor: `${scrollBarThumbBorderColor}`,

  WebkitBoxShadow: 'none',
});
