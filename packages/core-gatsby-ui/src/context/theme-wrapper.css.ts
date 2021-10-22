import { colorVars, layoutVars, sizingVars } from '@newrade/core-react-ui/theme';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  border: `1px solid ${colorVars.colors.grey[200]}`,
  overflow: `hidden`,
  borderRadius: 8,
});

export const header = style({
  display: 'grid',
  gap: sizingVars.sizes.desktop.x2,
  gridTemplateColumns: `repeat(auto-fit, 170px)`,
  padding: `${sizingVars.sizes.desktop.x3}`,
  borderBottom: `1px solid ${colorVars.colors.grey[200]}`,
});

export const content = style({
  maxWidth: `min(calc(100vw - 2 * ${layoutVars.var.contentMargins}), var(--max-content-width))`,
});
