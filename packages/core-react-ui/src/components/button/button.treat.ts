import { ButtonStyleProps } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles: { [key in ButtonStyleProps['variant']]: string } &
  { [key in ButtonStyleProps['variantStyle']]: string } &
  { [key in ButtonStyleProps['icon']]: string } &
  { [key in ButtonStyleProps['size']]: string } &
  { [key in ButtonStyleProps['state']]: string } = {
  /**
   * Variant
   */

  normal: style(({ theme, cssTheme }: Theme) => ({
    backgroundColor: cssTheme.colors.colors.primary[100],
  })),
  reversed: style(({ theme, cssTheme }: Theme) => ({})),
  rest: style(({ theme, cssTheme }: Theme) => ({
    outline: 'none',
    cursor: 'pointer',
    transition: `all 0.2s ease-out`,

    /**
     * States
     */
    ':hover': {
      color: cssTheme.colors.colors.primary[500],
    },
    ':active': {
      color: cssTheme.colors.colors.primary[500],
    },
    ':focus': {
      color: cssTheme.colors.colors.primary[500],
      // outline: `1px solid ${cssTheme.colors.colors.primary[500]}`,
      // outlineOffset: '10px',
    },
  })),
  pressed: style(({ theme, cssTheme }: Theme) => ({})),
  focused: style(({ theme, cssTheme }: Theme) => ({})),
  loading: style(({ theme, cssTheme }: Theme) => ({})),
  disabled: style(({ theme, cssTheme }: Theme) => ({})),

  primary: style(({ theme, cssTheme }: Theme) => ({})),
  secondary: style(({ theme, cssTheme }: Theme) => ({})),
  tertiary: style(({ theme, cssTheme }: Theme) => ({})),

  large: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
  })),

  none: style(({ theme, cssTheme }: Theme) => ({})),
  icon: style(({ theme, cssTheme }: Theme) => ({})),
  left: style(({ theme, cssTheme }: Theme) => ({})),
  right: style(({ theme, cssTheme }: Theme) => ({})),
};
