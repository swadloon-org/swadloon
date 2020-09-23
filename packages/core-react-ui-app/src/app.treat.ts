import { DesignSystem } from '@newrade/core-design-system';
import { applyStylesToHtmlElement } from './app.styles';
import { style } from 'treat';

export const globalStyle = style((theme: DesignSystem) => ({
  display: 'inherit',
}));

applyStylesToHtmlElement(globalStyle);
