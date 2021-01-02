import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
  marginTop: 80,
}));

/**
 * Global classes for markdown documents
 */

globalStyle(`${wrapper} h1 h2 h3 h4 h5 h6`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} p + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
  marginBottom: '1em',
}));
