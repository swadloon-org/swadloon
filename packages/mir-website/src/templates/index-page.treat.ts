import { DesignSystem } from 'core-design-system-old';
import { applyStylesToHtmlElement, applyStylesToBodyElement, applyReset } from '../styles/global.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

export const wrapper = style((theme: DesignSystem) => ({
  display: 'grid',
  width: '100vw',
  backgroundColor: theme.colors.greyscale0,
}));

applyReset(globalStyle);
applyStylesToHtmlElement(globalStyle);
applyStylesToBodyElement(globalStyle);
