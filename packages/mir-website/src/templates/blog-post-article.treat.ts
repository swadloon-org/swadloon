import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  fontSize: '16px',
  display: 'grid',
  gridTemplateColumns: `1fr`,
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,

  '@media': {
    // [theme.layout.media.tablet]: {
    //   padding: theme.sizing.sizes.x6,
    // },
    [theme.layout.media.desktop]: {
      gridTemplateColumns: `minmax(1.2rem, 1fr)
          minmax(900px, 57ch)
          minmax(1.2rem, 1fr)`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  position: 'relative',

  display: 'grid',

  gridRowGap: theme.sizing.sizes.x4,
  margin: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,

  '@media': {
    [theme.layout.media.tablet]: {
      padding: `${theme.layout.contentMargins.tablet.px} ${theme.sizing.sizes.x6}`,
    },
    [theme.layout.media.desktop]: {
      margin: `${theme.sizing.sizes.x6} ${theme.layout.contentMargins.desktop.px}`,
      gridColumnStart: '2',
    },
  },
}));

export const subtitle = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale500,
}));

export const tableContents = style((theme: DesignSystem) => ({
  position: 'fixed',
  top: 200,
  right: '200px',
}));
