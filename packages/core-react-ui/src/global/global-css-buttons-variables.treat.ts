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
    [varNames.variants.primary.textColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.primary.iconColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.primary.borderColor || 'undefined']: colors.var.colorIntents.primary,
    [varNames.variants.primary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.primaryReversed.backgroundColor || 'undefined']:
      colors.var.colorIntents.primary,
    [varNames.variants.primaryReversed.textColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.primaryReversed.iconColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.primaryReversed.borderColor || 'undefined']:
      colors.var.colorIntents.primaryReversed,
    [varNames.variants.primaryReversed.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.secondary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.secondary.textColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.secondary.iconColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.secondary.borderColor || 'undefined']: colors.var.colorIntents.secondary,
    [varNames.variants.secondary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.secondaryReversed.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.secondaryReversed.textColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.secondaryReversed.iconColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.secondaryReversed.borderColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.secondaryReversed.outlineColor || 'undefined']:
      colors.var.colors.primary[100],

    [varNames.variants.tertiary.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.tertiary.textColor || 'undefined']:
      colors.var.colorIntents.tertiaryTextReversed,
    [varNames.variants.tertiary.iconColor || 'undefined']:
      colors.var.colorIntents.tertiaryTextReversed,
    [varNames.variants.tertiary.borderColor || 'undefined']: colors.var.colorIntents.transparent,
    [varNames.variants.tertiary.outlineColor || 'undefined']: colors.var.colors.primary[700],

    [varNames.variants.tertiaryReversed.backgroundColor || 'undefined']:
      colors.var.colorIntents.transparent,
    [varNames.variants.tertiaryReversed.textColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.tertiaryReversed.iconColor || 'undefined']:
      colors.var.colorIntents.secondaryTextReversed,
    [varNames.variants.tertiaryReversed.borderColor || 'undefined']:
      colors.var.colorIntents.primaryTextReversed,
    [varNames.variants.tertiaryReversed.outlineColor || 'undefined']:
      colors.var.colors.primary[100],

    /**
     * Buttons styles
     */
    [varNames.sizes.large.border?.default?.radius || 'undefined']:
      buttons.sizes.large.border?.default?.radius,
  };
});
