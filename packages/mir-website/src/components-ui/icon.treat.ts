import { style } from 'treat';
import { DesignSystem, ICON_SIZE } from 'core-design-system';

export const icon = style((theme: DesignSystem) => ({}));

type Styles = { [key in keyof typeof ICON_SIZE]: string };

export const large = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.MOBILE.large.valueRem,
  height: theme.iconography.sizes.MOBILE.large.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: theme.iconography.sizes.TABLET.large.valueRem,
      height: theme.iconography.sizes.TABLET.large.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: theme.iconography.sizes.DESKTOP.large.valueRem,
      height: theme.iconography.sizes.DESKTOP.large.valueRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.MOBILE.medium.valueRem,
  height: theme.iconography.sizes.MOBILE.medium.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: theme.iconography.sizes.TABLET.medium.valueRem,
      height: theme.iconography.sizes.TABLET.medium.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: theme.iconography.sizes.DESKTOP.medium.valueRem,
      height: theme.iconography.sizes.DESKTOP.medium.valueRem,
    },
  },
}));

export const small = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.MOBILE.small.valueRem,
  height: theme.iconography.sizes.MOBILE.small.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.TABLET_PORTRAIT.valuePx})`]: {
      width: theme.iconography.sizes.TABLET.small.valueRem,
      height: theme.iconography.sizes.TABLET.small.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.DESKTOP_SMALL.valuePx})`]: {
      width: theme.iconography.sizes.DESKTOP.small.valueRem,
      height: theme.iconography.sizes.DESKTOP.small.valueRem,
    },
  },
}));

const styles: Styles = {
  large,
  medium,
  small,
};
