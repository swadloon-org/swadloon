import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
}));

/**
 * Styles for kbd element
 */
globalStyle(`${wrapper} h1`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1em',
}));
