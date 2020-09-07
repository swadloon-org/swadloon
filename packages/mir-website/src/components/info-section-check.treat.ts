import { DesignSystem } from 'core-design-system';
import { style, globalStyle } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  marginBottom: `${theme.sizing.sizes.x2}`,
}));

export const label = style((theme: DesignSystem) => ({
  alignItems: 'flex-start',
  marginTop: '6px',
}));

export const iconCheck = style((theme: DesignSystem) => ({
  marginRight: `${theme.sizing.sizes.x3}`,
}));
