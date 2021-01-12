import { DesignSystem } from '@newrade/core-design-system-old';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: `1fr`,
  gridRowGap: `${theme.sizing.sizes.x6}`,
  justifySelf: 'center',
  justifyItems: 'center',
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,
  backgroundColor: theme.colors.greyscale0,

  '@media': {
    [theme.layout.media.desktop]: {
      gridTemplateColumns: `1fr 1fr`,
      gridAutoFlow: 'dense',
      gridColumnGap: `${theme.sizing.sizes.x7}`,

      maxWidth: '1200px',
      width: '100%',
      padding: `${theme.sizing.sizes.x7} 0`,
    },
  },
}));

export const reversed = style((theme: DesignSystem) => ({
  display: 'grid',
}));

globalStyle(`${reversed} > *:first-child`, (theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.desktop]: {
      gridColumnStart: '2',
    },
  },
}));
