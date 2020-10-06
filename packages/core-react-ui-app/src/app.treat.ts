import { style } from 'treat';
import { applyStylesToHtmlElement } from './app.styles';

export const globalStyle = style((theme: any) => ({
  display: 'inherit',
}));

applyStylesToHtmlElement(globalStyle);
