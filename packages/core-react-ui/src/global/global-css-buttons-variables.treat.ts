import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

globalStyle(`${wrapper}, html`, ({ theme, cssTheme }: Theme) => {
  const { colors, components } = cssTheme;
  const { buttons } = components;

  return {
    /**
     * Buttons variables
     */
    [buttons.varNames.variants.primary.backgroundColor || 'undefined']: colors.var.colorIntents.primary,
    [buttons.varNames.variants.primary.textColor || 'undefined']: colors.var.colorIntents.primaryTextReversed,
    [buttons.varNames.variants.primary.iconColor || 'undefined']: colors.var.colorIntents.primaryTextReversed,
  };
});
