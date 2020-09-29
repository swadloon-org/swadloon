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
  // maxWidth: '1200px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '@media': {
    [theme.layout.media.mobile]: {
      padding: `0 ${theme.layout.contentMargins.mobile.px}`,
    },
    [theme.layout.media.tablet]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
    [theme.layout.media.desktop]: {
      maxWidth: '1200px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium.px})`]: {
      maxWidth: '1600px',
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
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
  height: `auto`,
  justifySelf: 'center',

  '@media': {
    [theme.layout.media.tabletPlus]: {
      width: '1200px',
    },
    [`min-width(${theme.layout.breakpoints.desktopMedium.px})`]: {
      width: '1600px',
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
  margin: `0 ${theme.layout.contentMargins.mobile.px}`,
  '@media': {
    [theme.layout.media.tabletPlus]: {
      margin: `0 ${theme.layout.contentMargins.tablet.px}`,
    },
  },
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
