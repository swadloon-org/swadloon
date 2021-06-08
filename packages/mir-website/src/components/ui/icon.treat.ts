import { style } from 'treat';
import { DesignSystem, ICON_SIZE } from '@newrade/core-design-system-old';

export const icon = style((theme: DesignSystem) => ({}));

type Styles = { [key in ICON_SIZE]: string };

export const large = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.large.valueRem,
  height: theme.iconography.sizes.mobile.large.valueRem,
  '@media': {
    [theme.layout.media.tablet]: {
      width: theme.iconography.sizes.tablet.large.valueRem,
      height: theme.iconography.sizes.tablet.large.valueRem,
    },
    [theme.layout.media.desktop]: {
      width: theme.iconography.sizes.desktop.large.valueRem,
      height: theme.iconography.sizes.desktop.large.valueRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.medium.valueRem,
  height: theme.iconography.sizes.mobile.medium.valueRem,
  '@media': {
    [theme.layout.media.tablet]: {
      width: theme.iconography.sizes.tablet.medium.valueRem,
      height: theme.iconography.sizes.tablet.medium.valueRem,
    },
    [theme.layout.media.desktop]: {
      width: theme.iconography.sizes.desktop.medium.valueRem,
      height: theme.iconography.sizes.desktop.medium.valueRem,
    },
  },
}));

export const small = style((theme: DesignSystem) => ({
  width: theme.iconography.sizes.mobile.small.valueRem,
  height: theme.iconography.sizes.mobile.small.valueRem,
  '@media': {
    [theme.layout.media.tablet]: {
      width: theme.iconography.sizes.tablet.small.valueRem,
      height: theme.iconography.sizes.tablet.small.valueRem,
    },
    [theme.layout.media.desktop]: {
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
