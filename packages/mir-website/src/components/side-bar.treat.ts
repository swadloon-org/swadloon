import { DesignSystem } from '@newrade/core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'fixed',
  top: '0',
  height: '100%',
  backgroundColor: theme.colors.greyscale0,
  zIndex: 10,
  boxShadow: theme.effects.shadows.medium.css,
  display: 'block',
}));

export const topContainer = style((theme: DesignSystem) => ({
  padding: '18px 27px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: theme.colors.greyscale900,
}));

export const logo = style((theme: DesignSystem) => ({
  width: '100px',
  height: '59px',
}));

export const icon = style((theme: DesignSystem) => ({}));

globalStyle(`${icon} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0,
}));

export const content = style((theme: DesignSystem) => ({
  paddingTop: theme.sizing.sizes.x2,
}));

export const openend = style((theme: DesignSystem) => ({
  width: '90%',
  '@media': {
    [theme.layout.media.tablet]: {
      width: '40%',
    },
  },
}));

export const closed = style((theme: DesignSystem) => ({
  width: '0',
  display: 'none',
}));

export const separation = style((theme: DesignSystem) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  paddingTop: theme.sizing.sizes.x5,
  paddingBottom: theme.sizing.sizes.x2,
}));

export const containerList = style((theme: DesignSystem) => ({}));
export const listMenu = style((theme: DesignSystem) => ({}));
export const itemMenu = style((theme: DesignSystem) => ({
  paddingTop: theme.sizing.sizes.x4,
  paddingBottom: theme.sizing.sizes.x4,
  paddingRight: theme.sizing.sizes.x5,
  paddingLeft: theme.sizing.sizes.x6,
  cursor: 'pointer',
}));

export const activeItem = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
  backgroundColor: theme.colors.primary500,
}));

export const titleItem = style((theme: DesignSystem) => ({
  maxWidth: '250px',
  color: 'currentColor',
  textDecoration: 'none',
}));

export const listSocial = style((theme: DesignSystem) => ({
  paddingLeft: theme.sizing.sizes.x6,
}));

export const bar = style((theme: DesignSystem) => ({
  marginRight: '17px',
}));

globalStyle(`${bar} rect`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
  width: '100%',
  height: '10px',
}));

export const btnSocial = style((theme: DesignSystem) => ({
  border: `1px ${theme.colors.primary500} solid`,
  marginRight: theme.sizing.sizes.x3,
  marginBottom: theme.sizing.sizes.x3,
}));

globalStyle(`${btnSocial} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
globalStyle(`${btnSocial} rect`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
