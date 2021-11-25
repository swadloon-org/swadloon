import { globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { globalThemeReversedSelector } from '../global/global-theme-classnames';
import { colorVars } from '../theme';

/**
 * Reusable classes to set text colors, also support reversed color mode
 */
export const colorText = recipe({
  variants: {
    variant: {
      primary: {
        color: `var(--color-text-primary, ${colorVars.colorIntents.primaryText})`,
      },
      primaryReversed: {},
      secondary: {
        color: `var(--color-text-secondary, ${colorVars.colorIntents.secondaryText})`,
      },
      secondaryReversed: {},
      tertiary: {
        color: `var(--color-text-tertiary, ${colorVars.colorIntents.tertiaryText})`,
      },
      tertiaryReversed: {},
    },
  },
});

const primary = colorText({
  variant: 'primary',
});

const primaryReversed = colorText({
  variant: 'primaryReversed',
});

const secondary = colorText({
  variant: 'secondary',
});

const secondaryReversed = colorText({
  variant: 'secondaryReversed',
});

const tertiary = colorText({
  variant: 'tertiary',
});

const tertiaryReversed = colorText({
  variant: 'tertiaryReversed',
});

globalStyle(`${globalThemeReversedSelector} ${primary}, ${primaryReversed}`, {
  color: `var(--color-text-primary-reversed, ${colorVars.colorIntents.primaryTextReversed})`,
});

globalStyle(`${globalThemeReversedSelector} ${secondary}, ${secondaryReversed}`, {
  color: `var(--color-text-secondary-reversed, ${colorVars.colorIntents.secondaryTextReversed})`,
});

globalStyle(`${globalThemeReversedSelector} ${tertiary}, ${tertiaryReversed}`, {
  color: `var(--color-text-tertiary-reversed, ${colorVars.colorIntents.tertiaryTextReversed})`,
});
