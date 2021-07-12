import { colorVars, sizingVars } from '@newrade/core-react-ui/lib/theme';
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
