import { DesignSystem } from 'core-design-system';
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
  gridRowGap: `var(${theme.sizing.sizeCSSVarNames.x3})`,
  justifyItems: 'center',
}));

//
// Default
//

export const Default = style((theme: DesignSystem) => ({
  color: theme.colors.greyscale1000,
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
  boxShadow: '0px 2px 34px rgba(155, 155, 155, 0.5)',
  borderRadius: '0px 48px 48px 48px',
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
