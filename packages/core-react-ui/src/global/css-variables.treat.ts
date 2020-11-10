import { globalStyle } from 'treat';

/**
 * Inspired from Normalize, but targeting modern browsers only.
 */

/**
 * Border-box everywhere
 */
globalStyle(`*`, {
  boxSizing: 'border-box',
});

/**
 * Resets paragraph elements
 */
globalStyle(`p`, {
  margin: 0,
});

/**
 * Resets headings
 */
globalStyle(`h1,h2,h3,h4,h5,h6`, {
  margin: 0,
});
