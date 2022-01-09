import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: sizeVars.x6,
});

export const box = style({
  background: '#91c9f9',
  borderRadius: '16px',
  height: '80px',
  width: '80px',
  touchAction: 'none',
  cursor: 'grab',
  zIndex: 10000,
  position: 'relative',
  WebkitUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
});
