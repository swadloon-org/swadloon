import { recipe } from '@vanilla-extract/recipes';

import { colorVars } from '../default-theme/src/theme';

/**
 * Reusable classes to set text colors, also support reversed color mode
 */
export const textVariants = recipe({
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
    disableCapsize: {
      true: {
        '::before': {
          display: 'initial !important',
          marginBottom: 'initial !important',
        },
        '::after': {
          display: 'initial !important',
          marginTop: 'initial !important',
        },
      },
    },
  },
});
