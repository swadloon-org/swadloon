import { style } from '@vanilla-extract/css';

import { colorVars, layoutVars, sizeVars } from '@newrade/core-react-ui/theme';

export const wrapper = style({
  border: `1px solid ${colorVars.colors.grey[200]}`,
  overflow: `hidden`,
  borderRadius: 8,
});

export const header = style({
  display: 'grid',
  gap: sizeVars.x2,
  gridTemplateColumns: `repeat(4, min-content)`,
  padding: `${sizeVars.x2}`,
  borderBottom: `1px solid ${colorVars.colors.grey[200]}`,
});

export const content = style({
  // maxWidth: `min(calc(100vw - 2 * ${layoutVars.var.contentMargins}), var(--max-content-width))`,
  maxWidth: '100%',
  overflow: 'hidden',
});

/**
 *
 * iFrame
 *
 */

export const iframeWrapper = style({
  display: 'grid',
  width: '100%',
  maxWidth: '100%',
  backgroundColor: colorVars.colors.grey[25],
});

/**
 *
 * Codeblock
 *
 */

export const codeblock = style({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
});
