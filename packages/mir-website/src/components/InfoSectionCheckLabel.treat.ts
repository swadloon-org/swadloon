import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  maxWidth: '400px',
  marginBottom: `var(${theme.sizing.sizeCSSVarNames.X4})`,
}));

export const label = style((theme: DesignSystem) => ({
  alignItems: 'left',
  marginTop: '6px',
}));

export const iconCheck = style((theme: DesignSystem) => ({
  marginRight: `var(${theme.sizing.sizeCSSVarNames.X3})`,
}));
