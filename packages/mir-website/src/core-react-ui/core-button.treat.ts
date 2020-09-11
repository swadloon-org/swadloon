import { ButtonSize, DesignSystem } from 'core-design-system';
import { style } from 'treat';

type ButtonVariantStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonSizeStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonIconStyles = { [key in keyof typeof ButtonSize]: string };
type ButtonStateStyles = { [key in keyof typeof ButtonSize]: string };
type Styles = ButtonSizeStyles;
type AllStyles = ButtonVariantStyles | ButtonSizeStyles | ButtonIconStyles | ButtonStateStyles;

export const large = style((theme: DesignSystem) => ({
  height: theme.components.buttons.sizes.large.height
    ? theme.sizing.sizes[theme.components.buttons.sizes.large.height]
    : theme.sizing.sizes.x6,
}));

export const medium = style((theme: DesignSystem) => ({
  height: theme.components.buttons.sizes.medium.height
    ? theme.sizing.sizes[theme.components.buttons.sizes.medium.height]
    : theme.sizing.sizes.x6,
}));

export const small = style((theme: DesignSystem) => ({
  // ...theme.components?.buttons.sizes.small,
}));

const styles: Styles = {
  large,
  medium,
  small,
};
