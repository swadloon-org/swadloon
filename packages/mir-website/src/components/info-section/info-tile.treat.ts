import { DesignSystem } from 'core-design-system-old';
import { globalStyle, style } from 'treat';

//
// wrapper
//

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

//
// content
//

export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridRowGap: `${theme.sizing.sizes.x3}`,
  justifyItems: 'center',
}));

//
// reversed
//

export const reversed = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale0Reversed,
}));

//
// illustration
//

export const illustration = style((theme: DesignSystem) => ({}));

//
// variant with the section type6
//

export const borderWhite = style((theme: DesignSystem) => ({
  boxShadow: theme.effects.shadows.heavy.css,
  borderRadius: '0px 48px 48px 48px',
  backgroundColor: theme.colors.greyscale0,
}));

//
// backgroundIllustration
//

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

globalStyle(`${borderWhite} ${backgroundIllustration} path`, (theme: DesignSystem) => ({
  fill: 'inherit',
  stroke: 'none',
  width: '100%',
}));

globalStyle(`${borderWhite} ${illustration} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
