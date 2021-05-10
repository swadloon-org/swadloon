import { Variant } from '@newrade/core-design-system';
import { style } from 'treat';
import { Theme } from '../design-system';

export const colorTextStyles: { [key in Variant]: string } = {
  /**
   * Text styles
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary, ${cssTheme.colors.colorIntents.primaryText})`,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary-reversed, ${cssTheme.colors.colorIntents.primaryTextReversed})`,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary, ${cssTheme.colors.colorIntents.secondaryText})`,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary-reversed, ${cssTheme.colors.colorIntents.secondaryTextReversed})`,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary, ${cssTheme.colors.colorIntents.tertiaryText})`,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary-reversed, ${cssTheme.colors.colorIntents.tertiaryTextReversed})`,
  })),
};
