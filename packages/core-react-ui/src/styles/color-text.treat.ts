import { Variant } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';
import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';

export const colorTextStyles: { [key in Variant]: string } = {
  /**
   * Text styles
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary, ${cssTheme.colors.colorIntents.primaryText})`,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({})),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary, ${cssTheme.colors.colorIntents.secondaryText})`,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({})),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary, ${cssTheme.colors.colorIntents.tertiaryText})`,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary-reversed, ${cssTheme.colors.colorIntents.tertiaryTextReversed})`,
  })),
};

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.primary}, ${colorTextStyles.primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary-reversed, ${cssTheme.colors.colorIntents.primaryTextReversed})`,
  })
);

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.secondary}, ${colorTextStyles.secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary-reversed, ${cssTheme.colors.colorIntents.secondaryTextReversed})`,
  })
);

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.tertiary}, ${colorTextStyles.tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary-reversed, ${cssTheme.colors.colorIntents.tertiaryTextReversed})`,
  })
);
