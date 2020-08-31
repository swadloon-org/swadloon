import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

//
// base
//

export const base = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X2})`,
  position: 'relative',
  border: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
  borderRadius: '0',
  background: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  cursor: 'pointer',
}));

globalStyle(`${base} *`, {
  userSelect: 'none',
  cursor: 'pointer',
});

//
// sub elements
//

export const label = style((theme: DesignSystem) => ({
  textAlign: 'center',
}));

//
// primary
//

const basePrimary = (theme: DesignSystem) => ({
  padding: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) - 3px) var(${theme.sizing.sizeCSSVarNames.X3})`,
});

export const primaryDefault = style((theme: DesignSystem) => ({
  ...basePrimary(theme),
  color: theme.colors.primary500,
}));

export const primaryReversed = style((theme: DesignSystem) => ({
  ...basePrimary(theme),
  color: theme.colors.greyscale0Reversed,
}));

export const corner = style(() => ({
  position: 'absolute',
}));

globalStyle(`${corner} path`, {
  stroke: 'currentColor',
});

export const cornerTopLeft = style((theme: DesignSystem) => ({
  top: `-1.5px`,
  left: `-1.5px`,
}));

export const cornerBottomRight = style((theme: DesignSystem) => ({
  bottom: `-1.5px`,
  right: `-1.5px`,
}));

//
// secondary
//

export const secondaryDefault = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

export const secondaryReversed = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale0Reversed,
  color: theme.colors.primary500,
}));

//
// tertiary
//

export const tertiaryDefault = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscaleTransparent,
  color: theme.colors.primary500,
}));

export const tertiaryReversed = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscaleTransparent,
  color: theme.colors.greyscale0Reversed,
}));

//
// icon button
//

export const icon = style((theme: DesignSystem) => ({
  paddingTop: 0,
  paddingBottom: 0,
}));

export const illustration = style((theme: DesignSystem) => ({
  height: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) * 24 / 21)`,
  width: `calc(var(${theme.sizing.sizeCSSVarNames.X3}) * 24 / 21)`,
  verticalAlign: 'middle',
}));

globalStyle(`${illustration} rect`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));

globalStyle(`${illustration} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));

//
// button sizes
//

export const small = style((theme: DesignSystem) => ({
  // lineHeight: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  // height: `var(${theme.sizing.sizeCSSVarNames.X4})`,
}));
