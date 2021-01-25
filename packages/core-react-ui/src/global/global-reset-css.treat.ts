import { globalStyle } from 'treat';

/**
 * Inspired from Normalize, but targeting modern browsers only.
 * @see https://github.com/necolas/normalize.css
 */

/**
 * Border-box everywhere
 */
globalStyle(`*`, {
  boxSizing: 'border-box',
});

/**
 * Resets the html element
 */
globalStyle(`html`, {
  margin: 0,
  // Correct the line height in all browsers.
  lineHeight: '1.15',
  // Prevent adjustments of font size after orientation changes in iOS.
  WebkitTextSizeAdjust: '100%',
  // prevent the content to jump when scrolling
  overflowY: 'scroll',
  overflowX: 'hidden',
  // prevent tap highlight
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0) ',
  // @ts-ignore
  WebkitFontSmoothing: 'antialiased',
  // ensure fast clicks on ios safari 9, 10
  // disable browser handling of all panning and zooming gestures. https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#values
  touchAction: 'none',
  // smooth background transition
  transition: 'background-color 0.2s ease-out',
  // user select
  userSelect: 'none',
});

/**
 * Resets the body element
 */
globalStyle(`body`, {
  margin: 0,
  // prevent long string to break the layout
  wordBreak: 'break-word',
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

/**
 * Resets the hr element
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
globalStyle(`hr`, {
  boxSizing: 'content-box' /* 1 */,
  height: '0' /* 1 */,
  overflow: 'visible' /* 2 */,
  width: '100%',
});

/**
 * Resets pre, code, kdb, samp, elements
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
globalStyle(`pre,code,kbd,samp`, {
  fontFamily: 'monospace, monospace' /* 1 */,
  fontSize: '1em' /* 2 */,
  margin: 0,
});

/**
 * Resets the img tag
 */
globalStyle(`img`, {
  borderStyle: 'none',
});

/**
 *  Change the font styles in all browsers.
 *  Remove the margin in Firefox and Safari.
 */
globalStyle(`button, input, optgroup, select, textarea`, {
  fontFamily: 'inherit' /* 1 */,
  fontSize: '100% ' /* 1 */,
  lineHeight: '1 ' /* 1 */,
  margin: '0' /* 2 */,
});

/**
 * Remove the inheritance of text transform in Edge, Firefox.
 * Remove the inheritance of text transform in Firefox.
 */
globalStyle(
  `button,
  select,`,
  {
    textTransform: 'none',
  }
);

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
globalStyle(
  `button,
  [type='button'],
  [type='reset'],
  [type='submit']`,
  {
    WebkitAppearance: 'button',
  }
);

/**
 * Reset the button look
 */
globalStyle(`button`, {
  border: 'none',
  outline: 'none',
  background: 'none',
  backgroundColor: 'none',
});

/**
 * Remove the inner border and padding in Firefox.
 */
globalStyle(
  `button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner`,
  {
    borderStyle: 'none',
    padding: '0',
  }
);

/**
 * Restore the focus styles unset by the previous rule.
 */
globalStyle(
  `button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring`,
  {
    outline: '1px dotted ButtonText',
  }
);

/**
 * Correct the padding in Firefox.
 */
globalStyle(`fieldset`, {
  padding: '0.35em 0.75em 0.625em',
});

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
globalStyle(`progress`, {
  verticalAlign: 'baseline',
});

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
globalStyle(`[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button`, {
  height: 'auto',
});

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

globalStyle(`[type='search']`, {
  WebkitAppearance: 'textfield' /* 1 */,
  outlineOffset: '-2px' /* 2 */,
});

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
globalStyle(`[type='search']::-webkit-search-decoration`, {
  WebkitAppearance: 'none',
});

/**
 * Resets the file upload button style in Safari
 */
globalStyle(`::-webkit-file-upload-button`, {
  // Correct the inability to style clickable types in iOS and Safari.
  WebkitAppearance: 'button',
  // Change font properties to `inherit` in Safari.
  font: 'inherit',
});

/**
 * Resets the details tag
 */
globalStyle(`details`, {
  // Add the correct display in Edge, IE 10+, and Firefox.
  display: 'block',
});

/**
 * Resets the img tag
 */
globalStyle(`summary`, {
  // Add the correct display in all browsers.
  display: 'list-item',
});

/**
 * Resets table
 */
globalStyle(`table, caption, tbody, tfoot, thead, tr, th, td`, {
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});

globalStyle(`table`, {
  borderCollapse: 'collapse',
  borderSpacing: '0',
});
