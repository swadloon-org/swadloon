import { recipe } from '@vanilla-extract/recipes';

import { colorVars } from '../theme';

/**
 * Reusable classes to set text colors, also support reversed color mode
 */
export const getTextColorStyles = recipe({
  variants: {
    variant: {
      primary: {
        color: `var(--color-text-primary, ${colorVars.colorIntents.primaryText})`,
      },
      secondary: {
        color: `var(--color-text-secondary, ${colorVars.colorIntents.secondaryText})`,
      },
      tertiary: {
        color: `var(--color-text-tertiary, ${colorVars.colorIntents.tertiaryText})`,
      },
    },
  },
});

const primary = getTextColorStyles({
  variant: 'primary',
});

const secondary = getTextColorStyles({
  variant: 'secondary',
});

const tertiary = getTextColorStyles({
  variant: 'tertiary',
});
