import { DesignSystem } from '@newrade/core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  padding: `${theme.sizing.sizes.x2}`,
}));

export const label = style((theme: DesignSystem) => ({
  alignItems: 'flex-start',
  marginTop: '7px',
}));

export const iconCheck = style((theme: DesignSystem) => ({
  marginRight: `${theme.sizing.sizes.x3}`,
}));
