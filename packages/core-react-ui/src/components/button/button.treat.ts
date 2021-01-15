import { ButtonStyleProps } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../../design-system/css-design-system';

export const styles: { [key in ButtonStyleProps['variant']]: string } &
  { [key in ButtonStyleProps['icon']]?: string } &
  { [key in ButtonStyleProps['size']]: string } &
  { [key in ButtonStyleProps['state']]?: string } = {
  /**
   * Variant
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryTextReversed,
    backgroundColor: cssTheme.colors.colorIntents.primary,
    selectors: {
      '&[datapressed="true"]': {
        filter: `brightness(90%)`,
      },
      '&[disabled]': {
        cursor: 'not-allowed',
        color: cssTheme.colors.colorIntents.disabledText,
        backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
      },
    },
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
    backgroundColor: cssTheme.colors.colorIntents.primaryReversed,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
    border: `1px solid ${cssTheme.colors.colorIntents.primary}`,
    backgroundColor: cssTheme.colors.colorIntents.background0,
    selectors: {
      '&[datapressed="true"]': {
        backgroundColor: cssTheme.colors.colors.primary[100],
      },
      '&[disabled]': {
        cursor: 'not-allowed',
        color: cssTheme.colors.colorIntents.disabledText,
        borderColor: cssTheme.colors.colorIntents.backgroundDisabled,
        backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
      },
    },
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primaryReversed,
    border: `1px solid ${cssTheme.colors.colorIntents.primaryReversed}`,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: cssTheme.colors.colorIntents.primary,
    backgroundColor: cssTheme.colors.colorIntents.background0,
    selectors: {
      '&[datapressed="true"]': {
        backgroundColor: cssTheme.colors.colors.primary[100],
      },
      '&[disabled]': {
        cursor: 'not-allowed',
        color: cssTheme.colors.colorIntents.disabledText,
        backgroundColor: cssTheme.colors.colorIntents.backgroundDisabled,
      },
    },
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({})),

  /**
   * States
   */
  rest: style(({ theme, cssTheme }: Theme) => ({
    position: 'relative',
    outline: 'none',
    lineHeight: 0,
    cursor: 'pointer',
    appearance: 'none',
    userSelect: 'none',
    WebkitAppearance: 'none',
    borderRadius: 4,
    width: 'fit-content',
    ':focus': {
      boxShadow: `0 0 0 1px ${cssTheme.colors.colors.primary[700]}`,
    },
  })),
  loading: style(({ theme, cssTheme }: Theme) => ({})),
  disabled: style(({ theme, cssTheme }: Theme) => ({})),

  /**
   * Sizes
   */
  large: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3}`,
    fontSize: cssTheme.typography.labels.mobile.medium.capsize?.fontSize,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        fontSize: cssTheme.typography.labels.tablet.medium.capsize?.fontSize,
      },
      [cssTheme.layout.media.desktopSmall]: {
        fontSize: cssTheme.typography.labels.desktop.medium.capsize?.fontSize,
      },
    },
    selectors: {
      '&[dataicon="right"]': {
        padding: `${cssTheme.sizing.var.x3} 2.25em ${cssTheme.sizing.var.x3} ${cssTheme.sizing.var.x3}`,
      },
    },
  })),
  medium: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2}`,
    fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
      },
      [cssTheme.layout.media.desktopSmall]: {
        fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
      },
    },
    selectors: {
      '&[dataicon="right"]': {
        padding: `${cssTheme.sizing.var.x2} 2.25em ${cssTheme.sizing.var.x2} ${cssTheme.sizing.var.x2} `,
      },
    },
  })),
  small: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
    fontSize: cssTheme.typography.labels.mobile.small.capsize?.fontSize,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        fontSize: cssTheme.typography.labels.tablet.small.capsize?.fontSize,
      },
      [cssTheme.layout.media.desktopSmall]: {
        fontSize: cssTheme.typography.labels.desktop.small.capsize?.fontSize,
      },
    },
    selectors: {
      '&[dataicon="right"]': {
        padding: `${cssTheme.sizing.var.x1} 2.25em ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x2}`,
      },
    },
  })),
  xSmall: style(({ theme, cssTheme }: Theme) => ({
    padding: `${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1}`,
    fontSize: cssTheme.typography.labels.mobile.xSmall.capsize?.fontSize,
    '@media': {
      [cssTheme.layout.media.tablet]: {
        fontSize: cssTheme.typography.labels.tablet.xSmall.capsize?.fontSize,
      },
      [cssTheme.layout.media.desktopSmall]: {
        fontSize: cssTheme.typography.labels.desktop.xSmall.capsize?.fontSize,
      },
    },
    selectors: {
      '&[dataicon="right"]': {
        padding: `${cssTheme.sizing.var.x1} 2.25em ${cssTheme.sizing.var.x1} ${cssTheme.sizing.var.x1}`,
      },
    },
  })),

  /**
   * Icon
   */
  icon: style(({ theme, cssTheme }: Theme) => ({
    position: 'absolute',
    height: `1.5em`,
    width: `1.5em`,
  })),
  right: style(({ theme, cssTheme }: Theme) => ({
    top: `calc(50% - 0.75em)`,
    right: `0.6em`,
  })),
};
