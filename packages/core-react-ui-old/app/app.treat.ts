import { DesignSystem } from 'core-design-system-old';
import { applyStylesToHtmlElement } from './app.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

applyStylesToHtmlElement(globalStyle);
