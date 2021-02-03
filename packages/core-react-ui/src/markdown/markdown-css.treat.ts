import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  display: 'inherit',
}));

/**
 * Global classes for markdown documents
 */

const contentMargin = `2em`;

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

/**
 * Headings
 */

globalStyle(
  `${wrapper} > h1, ${wrapper} > h2, ${wrapper} > h3, ${wrapper} > h4, ${wrapper} > h5, ${wrapper} > h6`,
  ({ cssTheme, theme }: Theme) => ({
    marginBottom: '1.6em',
    position: 'relative',
  })
);

globalStyle(
  `${wrapper} > * + h1, ${wrapper} > * + h2, ${wrapper} > * + h3, ${wrapper} > * + h4, ${wrapper} > * + h5, ${wrapper} > * + h6`,
  ({ cssTheme, theme }: Theme) => ({
    marginTop: contentMargin,
  })
);

globalStyle(`${wrapper} .mdx-anchor-pound`, ({ cssTheme, theme }: Theme) => ({
  visibility: 'hidden',
  '@media': {
    [':hover']: {
      textDecoration: 'underline',
    },
  },
}));

/**
 * Paragraphs, list items
 */

globalStyle(`${wrapper} p + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} p + ul`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} ul + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} ul + ul`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} p + ol`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} ol + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} ol + ol`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} p + p:not(:last)`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: contentMargin,
}));

globalStyle(`${wrapper} p + img`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
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
  marginTop: '2em',
  marginBottom: '2em',
}));

/**
 * Medias
 */

globalStyle(`${wrapper} figure`, ({ cssTheme, theme }: Theme) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: 0, // resets browser default margin on figure element
  marginTop: contentMargin,
  marginBottom: contentMargin,
}));

globalStyle(`${wrapper} img`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: '100%',
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

globalStyle(`${wrapper} pre + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));

globalStyle(`${wrapper} p + pre`, ({ cssTheme, theme }: Theme) => ({
  marginTop: contentMargin,
}));
