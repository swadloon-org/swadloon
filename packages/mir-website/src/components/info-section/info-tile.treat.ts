import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 22px',
  minHeight: '248px',
  height: '248px',
  width: '248px',
}));

export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridRowGap: `var(${theme.sizing.sizeCSSVarNames.X3})`,
  justifyItems: 'center',
}));

export const Default = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale1000,
}));

export const reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
}));

export const illustration = style((theme: DesignSystem) => ({}));

export const backgroundIllustration = style((theme: DesignSystem) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
}));

export const text = style((theme: DesignSystem) => ({
  textAlign: 'center',
}));

globalStyle(`${backgroundIllustration} path`, (theme: DesignSystem) => ({
  fill: 'inherit',
  stroke: 'currentColor',
  width: '100%',
}));

globalStyle(`${illustration} path`, (theme: DesignSystem) => ({
  fill: 'currentColor',
}));
