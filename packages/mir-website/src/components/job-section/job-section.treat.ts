import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  padding: `${theme.sizing.sizes.x7} ${theme.layout.contentMargins.mobile.px}`,

  '@media': {
    [theme.layout.media.tablet]: {
      margin: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
  },
}));

export const container = style((theme: DesignSystem) => ({}));

export const content = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.tabletPlus]: {
      display: 'grid',
      gridColumn: '1',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
    [theme.layout.media.desktop]: {},
  },
}));

export const accordions = style((theme: DesignSystem) => ({
  paddingBottom: `${theme.sizing.sizes.x4}`,
}));

//
// TODO - Faire Marcher les classes accordions et tags pour ajuster le padding
//

export const tagsUnique = style((theme: DesignSystem) => ({
  paddingBottom: `${theme.sizing.sizes.x3}`,
}));

export const title = style((theme: DesignSystem) => ({
  alignSelf: 'center',
  marginBottom: `${theme.sizing.sizes.x6}`,
  maxWidth: '400px',
  textAlign: 'center',
  '@media': {
    [theme.layout.media.tabletPlus]: {
      marginBottom: `${theme.sizing.sizes.x5}`,
      maxWidth: '500px',
    },
  },
}));

export const containerBox = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: `${theme.sizing.sizes.x5}`,
}));

export const boxIcon = style((theme: DesignSystem) => ({}));
export const even = style((theme: DesignSystem) => ({}));
export const unenven = style((theme: DesignSystem) => ({}));
