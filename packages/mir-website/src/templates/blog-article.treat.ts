import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));

export const banner = style((theme: DesignSystem) => ({
  width: '100vw',
}));

export const breadcrumb = style((theme: DesignSystem) => ({
  justifySelf: 'center',
  display: 'flex',
  maxWidth: '1200px',
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  width: '100%',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      margin: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1600px',
    },
  },
}));

export const link1 = style((theme: DesignSystem) => ({
  paddingLeft: '0',
  paddingRight: '14px',
}));

export const separator = style((theme: DesignSystem) => ({
  paddingLeft: '0',
  paddingRight: '0',
}));

export const link2 = style((theme: DesignSystem) => ({
  paddingLeft: '14px',
}));

export const bannerContainer = style((theme: DesignSystem) => ({
  width: '100vw',
  height: `400px`,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      height: `600px`,
    },
    [theme.layout.media.desktop]: {
      height: `900px`,
    },
  },
}));

export const articleWrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  padding: `${theme.sizing.sizes.x5} 0 ${theme.sizing.sizes.x7}`,
  justifySelf: 'center',
  gridGap: '3rem',
  maxWidth: '680px',
  backgroundColor: theme.colors.greyscale0,
}));

export const label = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale500,
}));

export const title = style((theme: DesignSystem) => ({
  margin: `${theme.sizing.sizes.x3} 0 ${theme.sizing.sizes.x4}`,
  fontFamily: 'Georgia',
  fontWeight: 400,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      margin: `${theme.sizing.sizes.x3} 0 ${theme.sizing.sizes.x4}`,
    },
  },
}));
