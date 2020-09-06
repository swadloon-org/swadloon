import { style } from 'treat';
import { DesignSystem, ICON_SIZE } from 'core-design-system';

export const icon = style((theme: DesignSystem) => ({}));

type Styles = { [key in keyof typeof ICON_SIZE]: string };

export const large = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.large.valueRem,
  height: theme.iconography.sizes.mobile.large.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: theme.iconography.sizes.tablet.large.valueRem,
      height: theme.iconography.sizes.tablet.large.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: theme.iconography.sizes.desktop.large.valueRem,
      height: theme.iconography.sizes.desktop.large.valueRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.medium.valueRem,
  height: theme.iconography.sizes.mobile.medium.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: theme.iconography.sizes.tablet.medium.valueRem,
      height: theme.iconography.sizes.tablet.medium.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: theme.iconography.sizes.desktop.medium.valueRem,
      height: theme.iconography.sizes.desktop.medium.valueRem,
    },
  },
}));

export const small = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.small.valueRem,
  height: theme.iconography.sizes.mobile.small.valueRem,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      width: theme.iconography.sizes.tablet.small.valueRem,
      height: theme.iconography.sizes.tablet.small.valueRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      width: theme.iconography.sizes.desktop.small.valueRem,
      height: theme.iconography.sizes.desktop.small.valueRem,
    },
  },
}));

const styles: Styles = {
  large,
  medium,
  small,
};
