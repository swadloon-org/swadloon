import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100%',
  // prevent markdown content from breaking the layout
  overflow: 'hidden',
  // add a small padding on top and bottom to prevent text
  // clipping (due to capzise precide text measurements)
  paddingTop: '7px',
  paddingBottom: '7px',
});

/**
 *
 * Global classes for markdown documents
 * This is mainly to set spacing between elements since components do not have margins
 *
 */

/**
 * Gatsby
 * Styles for https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
 */
globalStyle(`${wrapper} .gatsby-resp-image-wrapper`, {
  marginLeft: 'inherit !important',
});

/**
 * Content sectioning
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
 */

/** Headings */

// the first element should not have margin top
globalStyle(`${wrapper} > *:first-child`, {
  marginTop: '0',
});

// if there are only one element, no bottom margin
globalStyle(`${wrapper} > *:only-child`, {
  marginBottom: '0',
});

// styles for h1-h2
globalStyle(`${wrapper} > h1, ${wrapper} > h2`, {
  marginTop: '1.75em',
  marginBottom: '1.2em',
});

// styles for h3-h6
globalStyle(`${wrapper} > h3, ${wrapper} > h4, ${wrapper} > h5, ${wrapper} > h6`, {
  marginTop: '2em',
  marginBottom: '1.5em',
});

// headings following headings should not have a top margin
globalStyle(`${wrapper} > *:is(h1,h2,h3,h4,h5,h6) + *:is(h1,h2,h3,h4,h5,h6)`, {
  marginTop: '0',
});

// elements following headings should not have margins since headings already have one
globalStyle(`${wrapper} > *:is(h1,h2,h3,h4,h5,h6) + *:not(h1,h2,h3,h4,h5,h6)`, {
  marginTop: '0',
});

/** Horizontal line */

globalStyle(`${wrapper} > hr`, {
  marginTop: '2em',
});

/**
 * Text content
 */

globalStyle(`${wrapper} > *:not(h1,h2,h3,h4,h5,h6) + *:not(h1,h2,h3,h4,h5,h6)`, {
  marginTop: '2em',
});

// forces sup content to fits parent's font size
globalStyle(`sup *`, {
  fontSize: `max(12px, 0.9em) !important`,
});

/** Paragraphs */

globalStyle(`${wrapper} > p + p, blockquote p + p`, {
  marginTop: '2em',
});

// hide line break and handle it with margin
globalStyle(`${wrapper} p + br`, {
  display: 'none',
});

globalStyle(`${wrapper} br + p`, {
  marginTop: '0.5em',
});

// disable capsize on paragraph internals
globalStyle(`${wrapper} p *, ${wrapper} p *::before, ${wrapper} p *::after`, {
  display: 'inline',
  content: 'none',
  whiteSpace: 'normal',
});

globalStyle(`${wrapper} > p + table`, {
  marginBottom: '1.25em',
});

/** List items */

globalStyle(`${wrapper} > *:not(h1,h2,h3,h4,h5,h6) + *:is(ul,ol)`, {
  marginTop: '1.7em',
});

globalStyle(`${wrapper} > *:is(ul,ol)`, {
  marginBottom: '0',
});

// multi line list item
globalStyle(`${wrapper} li p + p`, {
  marginBottom: '1.25em',
});

/** Quotes */

globalStyle(`${wrapper} > blockquote > blockquote`, {
  marginTop: '1em',
});

/** Footnotes */

// forces sup content to fits parent's font size
globalStyle(`.footnotes *`, {
  fontSize: `14px !important`,
});

/**
 * Details & summary
 */

globalStyle(`${wrapper} details + details`, {
  marginTop: 0,
});

globalStyle(`${wrapper} details + p`, {
  marginBottom: '4em',
});

globalStyle(`${wrapper} details p + p`, {
  marginTop: '1.5em',
});

/** Icons */

globalStyle(`${wrapper} a svg path`, {
  strokeWidth: '40',
});

/**
 * Tables
 */

globalStyle(`${wrapper} table`, {
  marginBottom: '2em',
});

// forces all links to be of the same size as td text content
globalStyle(`table a`, {
  fontSize: '1em !important',
});

/**
 * Medias
 */

globalStyle(`${wrapper} figure`, {
  display: 'flex',
  flexDirection: 'column',
  margin: 0, // resets browser default margin on figure element
  marginBottom: '2em',
});

globalStyle(`${wrapper} img`, {
  maxWidth: '100%',
  alignSelf: 'flex-start',
});

globalStyle(`${wrapper} > figcaption`, {
  marginBottom: '1.5em',
});

globalStyle(`${wrapper} p + iframe`, {
  marginBottom: '1em',
});

/**
 * Code
 */

globalStyle(`${wrapper} > pre`, {
  marginBottom: '1.5em',
});

globalStyle(`${wrapper} p + pre`, {
  marginBottom: '1.5em',
});

globalStyle(`${wrapper} pre + p`, {
  marginBottom: '1.5em',
});

// globalStyle(`${wrapper} p + pre + h1,h2,h3,h4,h5,h6`, {
//   marginBottom: 0,
// });

globalStyle(`${wrapper} ul + pre`, {
  marginBottom: '1.5em',
});

globalStyle(`${wrapper} pre + pre`, {
  marginBottom: '2em',
});

globalStyle(`${wrapper} ul + p + pre`, {
  marginBottom: '1.125em',
});

/**
 * Styles for text element
 */

/**
 * Styles for list items
 */

/**
 * Styles for tables
 */
