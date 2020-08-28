import { DesignSystem } from 'core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  borderRadius: '23px',
  boxShadow: '0px 2px 10px rgba(155, 155, 155, 0.5)',
}));
export const container = style((theme: DesignSystem) => ({
  width: 'fit-content',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const number = style((theme: DesignSystem) => ({
  position: 'absolute',
  color: theme.colors.greyscale0,
}));
export const illustration = style((theme: DesignSystem) => ({
  height: `calc(var(${theme.sizing.sizeCSSVarNames.X1}) * 5)`,
  width: `calc(var(${theme.sizing.sizeCSSVarNames.X1}) * 5)`,
}));

export const content = style((theme: DesignSystem) => ({
  padding: `0 var(${theme.sizing.sizeCSSVarNames.X2})`,
}));
export const label = style((theme: DesignSystem) => ({
  height: `calc(var(${theme.sizing.sizeCSSVarNames.X1}) * 5)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
