import { Theme } from '@newrade/core-react-ui';
import { globalStyle, style } from 'treat';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'inherit',
}));

/**
 * Global classes for markdown documents
 */

const contentMarginSmall = `1.4em`;
const contentMargin = `1.5em`;
const halfcontentMargin = `1em`;

/**
 * Content sectioning
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
 */

globalStyle(
  `${wrapper} > h1:not(last-child) + :not(h1,h2,h3,h4,h5,h6), ${wrapper} > h2:not(last-child) + :not(h1,h2,h3,h4,h5,h6), ${wrapper} > h3:not(last-child) + :not(h1,h2,h3,h4,h5,h6), ${wrapper} > h4:not(last-child) + :not(h1,h2,h3,h4,h5,h6), ${wrapper} > h5:not(last-child) + :not(h1,h2,h3,h4,h5,h6), ${wrapper} > h6:not(last-child) + :not(h1,h2,h3,h4,h5,h6),`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '1.5em',
    marginBottom: 0,
    position: 'relative',
  })
);

globalStyle(
  `${wrapper} > h1:not(last-child) + h2, ${wrapper} > h2:not(last-child) + h3, ${wrapper} > h3:not(last-child) + h4, ${wrapper} > h4:not(last-child) + h5, ${wrapper} > h5:not(last-child) + h6, ${wrapper} > h6:not(last-child)`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '1.75em',
    marginBottom: 0,
  })
);

globalStyle(
  `${wrapper} > h1 + *, ${wrapper} > h2 + *, ${wrapper} > h3 + *`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '1.5em',
    marginBottom: 0,
  })
);

globalStyle(
  `${wrapper} > h4 + *, ${wrapper} > h5 + *, ${wrapper} > h6 + *`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: '0.75em',
  })
);

globalStyle(
  `${wrapper} > * + h1, ${wrapper} > * + h2, ${wrapper} > * + h3, ${wrapper} >  * + h4, ${wrapper} > * + h5, ${wrapper} > * + h6`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: contentMargin,
  })
);

globalStyle(`${wrapper} > hr`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '20px',
  marginBottom: 0,
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
  `${wrapper} p *, ${wrapper} p *::before, ${wrapper} p *::after`,
  ({ cssTheme, theme }: Theme) => ({
    display: 'inline-block',
  })
);

globalStyle(`${wrapper} > p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} p + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.25em',
}));

globalStyle(`${wrapper} p + table`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.25em',
}));

globalStyle(`${wrapper} li p + p`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.25em',
}));

globalStyle(`${wrapper} ul + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} p + ul`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} ul + ul`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} ul + div`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} ul > li`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '0.2em',
}));

globalStyle(`${wrapper} ul > li:nth-child(1)`, ({ cssTheme, theme }: Theme) => ({
  marginTop: 0,
}));

globalStyle(`${wrapper} ul > li > ul`, ({ cssTheme, theme }: Theme) => ({
  marginLeft: '1.25em',
}));

globalStyle(`${wrapper} p + ol`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} ol + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

globalStyle(`${wrapper} ol > li`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '0.5em',
}));

globalStyle(`${wrapper} ol > li:nth-child(1)`, ({ cssTheme, theme }: Theme) => ({
  marginTop: 0,
}));

globalStyle(`${wrapper} ol > li > ol`, ({ cssTheme, theme }: Theme) => ({
  marginLeft: '1.25em',
}));

globalStyle(`${wrapper} ol + ol`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.25em',
}));

globalStyle(`${wrapper} p + p:not(:last)`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: contentMargin,
}));

globalStyle(`${wrapper} p + img`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
}));

globalStyle(`${wrapper} figcaption`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
}));

globalStyle(`${wrapper} * + blockquote`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
  marginBottom: contentMargin,
}));

globalStyle(`${wrapper} blockquote + *`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} p + iframe`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} iframe`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: `100%`,
}));

/**
 * Details & summary
 */

globalStyle(`${wrapper} p + details`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '4em',
}));

globalStyle(`${wrapper} details + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '4em',
}));

/**
 * Tables
 */

globalStyle(`${wrapper} table`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: contentMargin,
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
  marginTop: contentMargin,
  marginBottom: 'contentMargin',
}));

globalStyle(`${wrapper} img`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: '100%',
}));

/**
 * Styles for https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-images
 */
globalStyle(`${wrapper} .gatsby-resp-image-wrapper`, ({ cssTheme, theme }: Theme) => ({
  marginLeft: 'inherit !important',
}));

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

/**
 * Code
 */

globalStyle(
  `${wrapper} pre + h1, ${wrapper} pre + h2, ${wrapper} pre + h3, ${wrapper} pre + h4, ${wrapper} pre + h5, ${wrapper} pre + h6,`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: 0,
  })
);

globalStyle(`${wrapper} p + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
  marginBottom: 0,
}));

globalStyle(`${wrapper} pre + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
}));

globalStyle(`${wrapper} p + pre + h1,h2,h3,h4,h5,h6`, ({ cssTheme, theme }: Theme) => ({
  marginTop: 0,
}));

globalStyle(`${wrapper} ul + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
  marginBottom: 0,
}));

globalStyle(`${wrapper} pre + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} ul + p + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.125em',
}));

/**
 * Styles for text element
 */

globalStyle(`${wrapper} em`, ({ cssTheme, theme }: Theme) => ({
  fontSize: '16px',
}));

globalStyle(`${wrapper} strong`, ({ cssTheme, theme }: Theme) => ({
  fontSize: '16px',
  fontWeight: 700,
}));

globalStyle(`${wrapper} > h1`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontWeight: 700,
  letterSpacing: '-0.01em',
  fontSize: '48px',
}));

globalStyle(`${wrapper} > h2`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontWeight: 700,
  letterSpacing: '0',
  fontSize: '32px',
}));

globalStyle(`${wrapper} > h3`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontWeight: 700,
  letterSpacing: '0',
  fontSize: '24px',
}));

globalStyle(`${wrapper} > h4`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontWeight: 700,
  letterSpacing: '0',
  fontSize: '18px',
}));

/**
 * Styles for list items
 */

globalStyle(`${wrapper} li`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: cssTheme.typography.fonts.sans[0].name,
  fontSize: '16px',
  lineHeight: '1.5',
  listStylePosition: 'outside',
  paddingLeft: '0.25em',
}));

globalStyle(`${wrapper} ul`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: cssTheme.typography.fonts.sans[0].name,
  marginLeft: '1.25em',
}));

globalStyle(`${wrapper} ol`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: cssTheme.typography.fonts.sans[0].name,
  marginLeft: '1.25em',
}));

/**
 * Styles for tables
 */

globalStyle(`${wrapper} thead`, ({ cssTheme, theme }: Theme) => ({
  color: '#FFFFFF',
  backgroundColor: '#000000',
}));

globalStyle(`${wrapper} th`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.5',
  textAlign: 'left',
  wordBreak: 'normal',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingTop: '0.75em',
  paddingBottom: '0.75em',
  border: 'none',
}));

globalStyle(`${wrapper} td`, ({ cssTheme, theme }: Theme) => ({
  fontFamily: 'Inter',
  fontSize: '14px',
  lineHeight: '1.5',
  textAlign: 'left',
  wordBreak: 'normal',
  paddingLeft: '1em',
  paddingRight: '1em',
  paddingTop: '0.75em',
  paddingBottom: '0.75em',
  borderBottom: 'solid 1px #e0e0e0',
}));
