import { globalStyle, style } from 'treat';

import { Theme } from '../design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`:root, ${wrapper}`, ({ theme, cssTheme }: Theme) => {
  const { colors, components } = cssTheme;
  const { buttons } = components;
  const { varNames } = buttons;

  return {
    /**
     * Buttons colors
     */
    [varNames.variants.primary.backgroundColor || 'undefined']: colors.var.colorIntents.primary,
    [varNames.variants.primary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.primary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.primary.borderColor || 'undefined']: colors.var.colorIntents.primary,
    [varNames.variants.primary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.primary.backgroundColor || 'undefined']: colors.var.colorIntents.primary,
    [varNames.variants.primary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.primary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.primary.borderColor || 'undefined']: colors.var.colorIntents.primary,
    [varNames.variants.primary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.secondary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.secondary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.secondary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.secondary.borderColor || 'undefined']: colors.var.colorIntents.secondary,
    [varNames.variants.secondary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.secondary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.secondary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.secondary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.secondary.borderColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.secondary.outlineColor || 'undefined']: colors.var.colors.primary[100],

    [varNames.variants.tertiary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.tertiary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.tertiary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.tertiary.borderColor || 'undefined']: colors.var.colorIntents.transparent,
    [varNames.variants.tertiary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.tertiary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.tertiary.textColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.tertiary.iconColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.tertiary.borderColor || 'undefined']: colors.var.colors.grey[0],
    [varNames.variants.tertiary.outlineColor || 'undefined']: colors.var.colors.primary[100],

    /**
     * Buttons styles
     */
    [varNames.sizes.large.border?.default?.radius || 'undefined']:
      buttons.sizes.large.border?.default?.radius,
  };
});
