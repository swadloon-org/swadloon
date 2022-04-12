import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  gridTemplateRows: '1fr  min-content',
});

/**
 * Global plugin styles
 */

globalStyle('html, body', {
  width: '100vw',
  margin: '0',
  padding: '0',
  overflow: 'auto !important',
});
