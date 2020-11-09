import { DesignSystem } from '@newrade/core-design-system-old';
import { style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '270px',

  padding: `${theme.sizing.sizes.x3} ${theme.sizing.sizes.x3} ${theme.sizing.sizes.x1}`,

  backgroundColor: theme.colors.primary500,
  color: theme.colors.greyscale0Reversed,
}));

export const title = style((theme: DesignSystem) => ({
  margin: `${theme.sizing.sizes.x3} 0 ${theme.sizing.sizes.x2}`,
}));

export const button = style((theme: DesignSystem) => ({
  alignSelf: 'flex-end',
  paddingRight: '0',
}));
