import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

//
// Wrapper
//

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  backgroundColor: cssTheme.colors.colors.grey[900],
  paddingTop: cssTheme.sizing.var.x6,
  paddingBottom: cssTheme.sizing.var.x6,
}));

export const grid = style(({ cssTheme, theme }: Theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: cssTheme.sizing.var.x6,

  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '20px',
      gridTemplateAreas: `"area1 area1 area1 . area2 area2 area2 . address address address address"`,
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '20px',
      gridTemplateAreas: `"area1 area1 area1 . area2 area2 area2 . address address address . "`,
    },
  },
}));
export const services = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridArea: 'area1',
      height: 'fit-content',
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'area1',
    },
  },
}));
export const clinique = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridArea: 'area2',
      height: 'fit-content',
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'area2',
    },
  },
}));
export const joindre = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.tablet]: {
      gridArea: 'address',
      height: 'fit-content',
    },
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'address',
    },
  },
}));
export const copyright = style(({ cssTheme, theme }: Theme) => ({
  marginTop: cssTheme.sizing.var.x4,
  color: cssTheme.colors.colors.grey[600],
}));
export const listItem = style(({ cssTheme, theme }: Theme) => ({
  display: 'inline-block',
}));
