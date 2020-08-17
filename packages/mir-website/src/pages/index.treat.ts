import { DesignSystem } from 'core-design-system';
import { applyStylesToHtmlElement, applyStylesToBodyElement, applyReset } from '../styles/global.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
}));

export const content = style((theme: DesignSystem) => ({
  padding: theme.layout.contentMargins.MOBILE.valuePx,
}));

applyReset(globalStyle);
applyStylesToHtmlElement(globalStyle);
applyStylesToBodyElement(globalStyle);
