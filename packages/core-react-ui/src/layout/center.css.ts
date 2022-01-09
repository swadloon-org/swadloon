import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  display: 'grid',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  gridTemplateColumns: `${theme.layout.contentMargins.mobile}px 1fr ${theme.layout.contentMargins.mobile}px`,
  '@media': {
    [layoutCSS.media.tablet]: {
      gridTemplateColumns: `${theme.layout.contentMargins.tablet}px 1fr ${theme.layout.contentMargins.tablet}px`,
    },
    [layoutCSS.media.desktopSmall]: {
      gridTemplateColumns: `${theme.layout.contentMargins.desktop}px 1fr ${theme.layout.contentMargins.desktop}px`,
    },
  },
});

export const content = style({
  width: '100%',
  justifySelf: 'center',
  overflowX: 'visible',

  maxWidth: `calc(100vw - ${2 * theme.layout.contentMargins.mobile}px)`,
  '@media': {
    [layoutCSS.media.desktopSmall]: {
      maxWidth: `var(--max-content-width, ${theme.layout.contentWidth.desktopMaxWidth}px)`,
    },
  },
});
