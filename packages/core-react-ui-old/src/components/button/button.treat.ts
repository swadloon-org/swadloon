import { ButtonSize, DesignSystem } from 'core-design-system-old';
import { style } from 'treat';

type ButtonVariantStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonSizeStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonIconStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonStateStyles = { [key in keyof typeof ButtonSize]: string };
type Styles = ButtonSizeStyles;
type AllStyles = ButtonVariantStyles | ButtonSizeStyles | ButtonIconStyles | ButtonStateStyles;

export const large = style((theme: DesignSystem) => ({
  width: `${theme.components.buttons.sizes.small.width}`,
  padding:
    theme.components.buttons.sizes.large.paddingH && theme.components.buttons.sizes.large.paddingV
      ? `${theme.sizing.sizes[theme.components.buttons.sizes.large.paddingV]} ${
          theme.sizing.sizes[theme.components.buttons.sizes.large.paddingH]
        }`
      : 0,
}));

export const medium = style((theme: DesignSystem) => ({
  width: `${theme.components.buttons.sizes.small.width}`,
  padding:
    theme.components.buttons.sizes.medium.paddingH && theme.components.buttons.sizes.medium.paddingV
      ? `${theme.sizing.sizes[theme.components.buttons.sizes.medium.paddingV]} ${
          theme.sizing.sizes[theme.components.buttons.sizes.medium.paddingH]
        }`
      : 0,
}));

export const small = style((theme: DesignSystem) => ({
  width: `${theme.components.buttons.sizes.small.width}`,
  padding:
    theme.components.buttons.sizes.small.paddingH && theme.components.buttons.sizes.small.paddingV
      ? `${theme.sizing.sizes[theme.components.buttons.sizes.small.paddingV]} ${
          theme.sizing.sizes[theme.components.buttons.sizes.small.paddingH]
        }`
      : 0,
}));

const styles: Styles = {
  large,
  medium,
  small,
};
