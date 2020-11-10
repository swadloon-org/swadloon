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
 * Resets the html element
 */
globalStyle(`html`, {
  margin: 0,
  // Correct the line height in all browsers.
  lineHeight: '1.15',
  // Prevent adjustments of font size after orientation changes in iOS.
  WebkitTextSizeAdjust: '100%',
});

/**
 * Resets the body element
 */
globalStyle(`body`, {
  margin: 0,
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
 * Resets pre, code, kdb, samp, elements
 */
globalStyle(`pre,code,kbd,samp`, {
  // Correct the inheritance and scaling of font size in all browsers.
  fontFamily: 'monospace, monospace',
  // Correct the odd `em` font sizing in all browsers.
  fontSize: '1em',
});

/**
 * Styles kbd
 */
globalStyle(`kbd`, {
  display: 'inline-block',
  margin: '0 .1em',
  padding: '.1em .6em',
  fontFamily: 'Arial,"Helvetica Neue",Helvetica,sans-serif',
  fontSize: '11px',
  lineHeight: '1.5',
  color: '#424242',
  textShadow: '0 1px 0 #fff',
  backgroundColor: '#f3f3f3',
  border: '1px solid grey',
  borderRadius: '3px',
  boxShadow: '0 1px 1px rgba(12,13,14,0.15), inset 0 1px 0 0 #fff',
  overflowWrap: 'break-word',
});

/**
 * Resets the img tag
 */
globalStyle(`img`, {
  borderStyle: 'none',
});

/**
 * Resets the details tag
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
