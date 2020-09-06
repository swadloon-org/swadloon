import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '256px',
  padding: `var(${theme.sizing.sizeCSSVarNames.x3}) var(${theme.sizing.sizeCSSVarNames.x3}) var(${theme.sizing.sizeCSSVarNames.x1})`,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

export const title = style((theme: DesignSystem) => ({
  margin: `var(${theme.sizing.sizeCSSVarNames.x3}) 0 var(${theme.sizing.sizeCSSVarNames.x2})`,
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'flex-end',
  paddingRight: '0',
}));
