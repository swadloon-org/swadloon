import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.x2})`,
}));

export const label = style((theme: DesignSystem) => ({
  alignItems: 'flex-start',
  marginTop: '6px',
}));

export const iconCheck = style((theme: DesignSystem) => ({
  marginRight: `var(${theme.sizing.sizeCSSVarNames.x3})`,
}));
