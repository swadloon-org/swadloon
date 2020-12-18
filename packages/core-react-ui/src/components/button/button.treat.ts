import { ButtonSize } from '@newrade/core-design-system';
import { styleMap } from 'treat';
import { Theme } from '../../design-system/css-design-system';

type ButtonVariantStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonSizeStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonIconStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonStateStyles = { [key in keyof typeof ButtonSize]: string };
type Styles = ButtonSizeStyles;
type AllStyles = ButtonVariantStyles | ButtonSizeStyles | ButtonIconStyles | ButtonStateStyles;

export const sizes = styleMap<keyof Styles>(({ cssTheme }: Theme) => ({
  large: {
    // padding: cssTheme.components?.buttons.sizes.large.padding?.default,
    // backgroundColor: cssTheme.components?.buttons.variants.primary.backgroundColor,
  },
  medium: {
    // padding: cssTheme.components?.buttons.sizes.large.padding?.default,
  },
  small: {
    // padding: cssTheme.components?.buttons.sizes.large.padding?.default,
  },
}));
