import { DesignSystem } from '@newrade/core-design-system';
import { globalStyle, style } from 'treat';

//
// base
//

export const base = style((theme: DesignSystem) => ({
  padding: `18px`,
  position: 'relative',
  border: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
  borderRadius: '0',
  background: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  cursor: 'pointer',
  outline: `none`,
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
  padding: `24px 30px`,
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
  fill: `currentColor`,
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
  height: `24px`,
  width: `24px`,
  verticalAlign: 'middle',
}));

globalStyle(`${illustration} rect`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));

globalStyle(`${illustration} path`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));

globalStyle(`${illustration} fill`, (theme: DesignSystem) => ({
  fill: theme.colors.greyscale0Reversed,
}));

//
// button sizes
//

export const small = style((theme: DesignSystem) => ({}));
export const medium = style((theme: DesignSystem) => ({
  padding: `24px 24px`,
  minWidth: '200px',
}));
export const large = style((theme: DesignSystem) => ({
  padding: `27px 20px`,
  minWidth: '260px',
}));
export const text = style((theme: DesignSystem) => ({}));
