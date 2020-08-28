import { DesignSystem } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  margin: `0 ${theme.layout.contentMargins.MOBILE.valuePx}`,
}));

export const container = style((theme: DesignSystem) => ({}));

export const content = style((theme: DesignSystem) => ({}));
export const accordions1 = style((theme: DesignSystem) => ({
  margin: '1000px',
}));
export const tagsUnique = style((theme: DesignSystem) => ({
  border: 'red solid 1px',
}));
