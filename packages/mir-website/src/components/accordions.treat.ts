import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  backgroundColor: theme.colors.primary500,
  boxShadow: '0px 2px 10px rgba(155, 155, 155, 0.5)',
}));

export const container = style((theme: DesignSystem) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 var(${theme.sizing.sizeCSSVarNames.x4})`,
}));

export const label = style((theme: DesignSystem) => ({
  height: `calc(var(${theme.sizing.sizeCSSVarNames.x2}) * 5)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const illustration = style((theme: DesignSystem) => ({}));

export const Default = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
}));

export const reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale900,
  backgroundColor: theme.colors.greyscale0Reversed,
}));
export const selected = style((theme: DesignSystem) => ({}));
export const unselected = style((theme: DesignSystem) => ({}));

globalStyle(`${Default} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));
globalStyle(`${reversed} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
