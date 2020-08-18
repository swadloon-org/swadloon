import { DesignSystem } from 'core-design-system';
import { style } from 'treat';
import { Button } from 'core-react-ui';
import { read } from 'fs';
import { rect } from './banner.treat';
import { CSSProperties } from 'treat';

const resetButton: CSSProperties = {
  position: 'relative',
  appearance: 'none',
  WebkitAppearance: 'none',
  borderRadius: '0',
  background: 'none',
  border: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  cursor: 'pointer',
  // selectors: {
  //   [` > * &`]: {
  //     UserSelectProperty: 'none',
  //     cursor: 'pointer',
  //   },
  // },
};

export const primaryDefault = style((theme: DesignSystem) => ({
  ...resetButton,
  padding: `18px 21px`,

  color: theme.colors.primary500,
}));

export const primaryReversed = style((theme: DesignSystem) => ({
  ...resetButton,
  padding: `18px 21px`,

  color: theme.colors.greyscale0,
}));

export const secondaryDefault = style((theme: DesignSystem) => ({
  ...resetButton,

  padding: theme.sizing.sizeCSSVarNames.X2,
  border: 0,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0,
}));

const baseSecondaryTertiary = (theme) => ({
  padding: theme.sizing.sizeCSSVarNames.X2,
  border: 0,
});

export const secondaryReversed = style((theme: DesignSystem) => ({
  ...resetButton,
  ...baseSecondaryTertiary,

  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.primary500,
}));

export const tertiaryDefault = style((theme: DesignSystem) => ({
  ...resetButton,
  ...baseSecondaryTertiary,

  backgroundColor: theme.colors.greyscaleTransparent,
  color: theme.colors.primary500,
}));

export const tertiaryReversed = style((theme: DesignSystem) => ({
  ...resetButton,
  ...baseSecondaryTertiary,

  backgroundColor: theme.colors.greyscaleTransparent,
  color: theme.colors.greyscale0,
}));

export const labelContent = style((theme: DesignSystem) => ({
  textAlign: 'center',
}));

export const corner = style(() => ({}));

export const cornerTopLeft = style((theme: DesignSystem) => ({
  position: 'absolute',
  top: `-1.5px`,
  left: `-1.5px`,
  selectors: {
    [`${corner} path &`]: {
      stroke: 'currentColor',
    },
  },
}));

export const cornerBottomRight = style((theme: DesignSystem) => ({
  position: 'absolute',
  bottom: `-1.5px`,
  right: `-1.5px`,
  selectors: {
    [`${corner} path &`]: {
      stroke: 'currentColor',
    },
  },
}));

export const illustration = style((theme: DesignSystem) => ({
  height: `24px`,
  width: `24px`,
}));

export const Default = style((theme: DesignSystem) => ({
  visibility: 'visible',
}));

export const text = style((theme: DesignSystem) => ({
  visibility: 'visible',
}));

export const medium = style((theme: DesignSystem) => ({
  visibility: 'visible',
}));

export const small = style((theme: DesignSystem) => ({
  lineHeight: theme.sizing.sizeCSSVarNames.X4,
  height: theme.sizing.sizeCSSVarNames.X4,
}));

// export const reversed = style((theme: DesignSystem) => ({
//   color: theme.colors.greyscale200Reversed,
//   backgroundColor: 'red',

//   selectors: {
//     [`${primary} &`]: {
//       color: theme.colors.greyscale200Reversed,
//       backgroundColor: 'red',
//     },
//   },
// }));
