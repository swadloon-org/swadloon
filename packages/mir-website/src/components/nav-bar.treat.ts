import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  padding: `0 ${theme.layout.contentMargins.mobile.px}`,
  height: `55px`,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,

  '@media': {
    [theme.layout.media.tabletPlus]: {
      padding: `0 ${theme.layout.contentMargins.tablet.px}`,
      height: `${theme.sizing.sizes.x6}`,
    },
  },
}));

export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 100px 1fr',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  width: '100%',

  '@media': {
    [theme.layout.media.desktop]: {
      gridTemplateColumns: '1fr 100px 1fr',
      justifyContent: 'center',
      justifyItems: 'center',
      maxWidth: '1200px',
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopMedium.px})`]: {
      gridTemplateColumns: '1fr 100px 1fr',
      justifyContent: 'center',
      justifyItems: 'center',
      maxWidth: '1600px',
    },
  },
}));

export const logo = style((theme: DesignSystem) => ({
  height: `${theme.sizing.sizes.x5}`,
  '@media': {
    [theme.layout.media.tablet]: {
      height: '40px',
    },
    [theme.layout.media.desktop]: {
      height: `${theme.sizing.sizes.x5}`,
    },
  },
}));

export const icon = style((theme: DesignSystem) => ({}));

globalStyle(`${icon} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0,
}));

export const mobileLeftToolbar = style((theme: DesignSystem) => ({
  display: 'flex',
  justifySelf: 'start',
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));
export const mobileRightToolbar = style((theme: DesignSystem) => ({
  display: 'flex',
  justifySelf: 'end',
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'none',
    },
  },
}));

export const desktopLeftToolbar = style((theme: DesignSystem) => ({
  display: 'none',
  justifySelf: 'start',
  alignItems: 'center',
  height: '100%',
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'flex',
    },
  },
}));

globalStyle(`${desktopLeftToolbar} > *`, (theme: DesignSystem) => ({
  marginRight: `${theme.sizing.sizes.x4}`,
}));

export const desktopRightToolbar = style((theme: DesignSystem) => ({
  display: 'none',
  justifySelf: 'end',
  '@media': {
    [theme.layout.media.desktop]: {
      display: 'flex',
    },
  },
}));

globalStyle(`${desktopRightToolbar} > *`, (theme: DesignSystem) => ({
  marginLeft: `${theme.sizing.sizes.x4}`,
}));

export const desktopSocialButtons = style((theme: DesignSystem) => ({
  display: 'flex',
  '@media': {
    [theme.layout.media.tablet]: {},
    [theme.layout.media.desktop]: {},
  },
}));

globalStyle(`${desktopSocialButtons} button`, (theme: DesignSystem) => ({
  height: '100%',
}));

export const language = style((theme: DesignSystem) => ({
  '@media': {
    [theme.layout.media.tablet]: {},
    [theme.layout.media.desktop]: {},
  },
}));
