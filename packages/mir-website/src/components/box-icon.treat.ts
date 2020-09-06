import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  padding: `var(${theme.sizing.sizeCSSVarNames.X4})`,
  borderRadius: '0px 30px 30px 30px',
  boxShadow: '6px 6px 24px #D7D7D7',
}));

export const container = style((theme: DesignSystem) => ({
  display: 'grid',
  gridTemplateColumns: '50px 1fr',
  gridColumnGap: '25px',
}));

export const Default = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

export const Reversed = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale0,
  color: theme.colors.greyscale1000,
}));

export const icon = style((theme: DesignSystem) => ({}));
export const title = style((theme: DesignSystem) => ({
  alignSelf: 'center',
}));

globalStyle(`${Default} ${icon} path`, (theme: DesignSystem) => ({
  fill: 'currentColor',
}));
globalStyle(`${Reversed} ${icon} path`, (theme: DesignSystem) => ({
  fill: theme.colors.primary500,
}));
