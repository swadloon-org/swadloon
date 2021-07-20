import { Theme } from '@newrade/core-react-ui/src';
import { globalStyle, style } from 'treat';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
}));

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
globalStyle(`${wrapper} .gatsby-resp-image-wrapper`, ({ cssTheme, theme }: Theme) => ({
  marginLeft: 'inherit !important',
}));

/**
 * Content sectioning
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
 */

/** Headings */

globalStyle(`${wrapper} > h1, ${wrapper} > h2`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '2em',
  marginBottom: '1.2em',
}));

globalStyle(
  `${wrapper} > h3, ${wrapper} > h4, ${wrapper} > h5, ${wrapper} > h6`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '2em',
    marginBottom: '1.5em',
  })
);

globalStyle(
  `${wrapper} > *:is(h1,h2,h3,h4,h5,h6) + *:is(h1,h2,h3,h4,h5,h6)`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '0',
  })
);

globalStyle(
  `${wrapper} > *:is(h1,h2,h3,h4,h5,h6) + *:not(h1,h2,h3,h4,h5,h6)`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '0',
  })
);

/** Horizontal line */

globalStyle(`${wrapper} > hr`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '20px',
  marginBottom: '20px',
}));

/**
 * Anchor for documentation pages
 */

globalStyle(`${wrapper} .mdx-anchor`, ({ cssTheme, theme }: Theme) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  transform: 'translateX(-100%)',
  paddingRight: '4px',
  visibility: 'hidden',
}));

globalStyle(`${wrapper} .mdx-anchor-pound`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'hidden',
  '@media': {
    [':hover']: {
      textDecoration: 'underline',
    },
  },
}));

/**
 * Text content
 */

globalStyle(
  `${wrapper} > *:not(h1,h2,h3,h4,h5,h6) + *:not(h1,h2,h3,h4,h5,h6)`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '2em',
  })
);

/** Paragraphs */

globalStyle(`${wrapper} > p + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '2em',
}));

// hide line break and handle it with margin
globalStyle(`${wrapper} p + br`, ({ cssTheme, theme }: Theme) => ({
  display: 'none',
}));
globalStyle(`${wrapper} br + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '0.5em',
}));

// disable capsize on paragraph internals
globalStyle(
  `${wrapper} p *, ${wrapper} p *::before, ${wrapper} p *::after`,
  ({ cssTheme, theme }: Theme) => ({
    display: 'inline',
    content: 'none',
    whiteSpace: 'normal',
  })
);

globalStyle(`${wrapper} > p + table`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.25em',
}));

/** List items */

globalStyle(
  `${wrapper} > *:not(h1,h2,h3,h4,h5,h6) + *:is(ul,ol)`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '1.6em',
  })
);

globalStyle(`${wrapper} > *:is(ul,ol)`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '0',
}));

// multi line list item
globalStyle(`${wrapper} li p + p`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.25em',
}));

/** Quotes */

globalStyle(`${wrapper} > blockquote > blockquote`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1em',
}));

globalStyle(`${wrapper} > code`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: 'var(--max-content-width)',
}));

/**
 * Details & summary
 */

globalStyle(`${wrapper} p + details`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '4em',
}));

globalStyle(`${wrapper} details + p`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '4em',
}));

/** Icons */

globalStyle(`${wrapper} a svg path`, ({ cssTheme, theme }: Theme) => ({
  strokeWidth: '40',
}));

/**
 * Tables
 */

globalStyle(`${wrapper} table`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '2em',
  borderCollapse: 'separate',
  width: '100%',
}));

/**
 * Medias
 */

globalStyle(`${wrapper} figure`, ({ cssTheme, theme }: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: 0, // resets browser default margin on figure element
  marginBottom: '2em',
}));

globalStyle(`${wrapper} img`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: '100%',
}));

globalStyle(`${wrapper} > figcaption`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} p + iframe`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1em',
}));

globalStyle(`${wrapper} iframe`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: `100%`,
}));

/**
 * Code
 */

globalStyle(`${wrapper} > pre`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} p + pre`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} pre + p`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

// globalStyle(`${wrapper} p + pre + h1,h2,h3,h4,h5,h6`, ({ cssTheme, theme }: Theme) => ({
//   marginBottom: 0,
// }));

globalStyle(`${wrapper} ul + pre`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} pre + pre`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '2em',
}));

globalStyle(`${wrapper} ul + p + pre`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.125em',
}));

/**
 * Styles for text element
 */

/**
 * Styles for list items
 */

/**
 * Styles for tables
 */

/**
 * Styles for kbd element
 */

globalStyle(`${wrapper} kbd`, ({ cssTheme, theme }: Theme) => ({
  display: 'inline-block',
  margin: '0 .1em',
  padding: '.1em .6em',
  fontFamily: 'Arial,"Helvetica Neue",Helvetica,sans-serif',
  fontSize: '11px',
  lineHeight: '1.5',
  color: '#424242',
  // color: cssTheme.colors.grey[1000],
  textShadow: '0 1px 0 #fff',
  backgroundColor: '#f3f3f3',
  border: '1px solid grey',
  borderRadius: '3px',
  boxShadow: '0 1px 1px rgba(12,13,14,0.15), inset 0 1px 0 0 #fff',
  overflowWrap: 'break-word',
}));
