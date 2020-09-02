import { DesignSystem } from 'core-design-system';
import { applyStylesToHtmlElement, applyStylesToBodyElement, applyReset } from './global.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));
