import { style } from 'treat';

import { Variant } from '@newrade/core-design-system';

import { Theme } from '../design-system';
import { colorVars } from '../theme';

export const colorTextStyles: { [key in Variant]: string } = {
  /**
   * Text styles
   */
  primary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-primary, ${colorVars.colorIntents.primaryText})`,
  })),
  secondary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-secondary, ${colorVars.colorIntents.secondaryText})`,
  })),
  tertiary: style(({ theme, cssTheme }: Theme) => ({
    color: `var(--color-text-tertiary, ${colorVars.colorIntents.tertiaryText})`,
  })),
};
