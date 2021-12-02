import { globalStyle, style } from 'treat';

import { Variant } from '@newrade/core-design-system';

import { Theme } from '../design-system';
import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { colorVars } from '../theme';

export const colorTextStyles: { [key in Variant]: string } = {
  /**
   * Text styles
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary, ${colorVars.colorIntents.primaryText})`,
  })),
  primaryReversed: style(({ theme, cssTheme }: Theme) => ({})),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary, ${colorVars.colorIntents.secondaryText})`,
  })),
  secondaryReversed: style(({ theme, cssTheme }: Theme) => ({})),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary, ${colorVars.colorIntents.tertiaryText})`,
  })),
  tertiaryReversed: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary-reversed, ${colorVars.colorIntents.tertiaryTextReversed})`,
  })),
};

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.primary}, ${colorTextStyles.primaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary-reversed, ${colorVars.colorIntents.primaryTextReversed})`,
  })
);

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.secondary}, ${colorTextStyles.secondaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary-reversed, ${colorVars.colorIntents.secondaryTextReversed})`,
  })
);

globalStyle(
  `${globalThemeReversedSelector} ${colorTextStyles.tertiary}, ${colorTextStyles.tertiaryReversed}`,
  ({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary-reversed, ${colorVars.colorIntents.tertiaryTextReversed})`,
  })
);
