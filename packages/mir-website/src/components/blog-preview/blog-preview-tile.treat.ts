import { DesignSystem } from '@newrade/core-design-system';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '256px',
  padding: `${theme.sizing.sizes.x3} ${theme.sizing.sizes.x3} ${theme.sizing.sizes.x1}`,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

export const title = style((theme: DesignSystem) => ({
  margin: `${theme.sizing.sizes.x3} 0 ${theme.sizing.sizes.x2}`,
}));

export const buttonGroup = style((theme: DesignSystem) => ({
  display: 'flex',
  alignSelf: 'flex-end',
  paddingRight: '0',
}));

export const button = style((theme: DesignSystem) => ({
  paddingRight: '0',
}));
