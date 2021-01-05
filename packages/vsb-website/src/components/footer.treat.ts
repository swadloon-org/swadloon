import { Theme } from '@newrade/core-react-ui';
import { style } from 'treat';

//
// Wrapper
//

export const wrapper = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {},
  },
}));
export const grid = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.tablet]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'service service . clinique clinique . joindre joindre . . . . '",
    },
    [cssTheme.layout.media.desktopSmall]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridTemplateAreas: "'service service . clinique clinique . joindre joindre . . . . '",
    },
  },
}));
export const services = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'service',
    },
  },
}));
export const clinique = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'clinique',
    },
  },
}));
export const joindre = style(({ cssTheme, theme }: Theme) => ({
  '@media': {
    [cssTheme.layout.media.desktopSmall]: {
      gridArea: 'joindre',
    },
  },
}));
export const copyright = style(({ cssTheme, theme }: Theme) => ({}));
