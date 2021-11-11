import { style } from '@vanilla-extract/css';

export const iframe = style({
  border: 'none',
  minHeight: '50px',
  height: '100%',
  maxHeight: `max(60vh, 400px)`,

  transition: `opacity 1s ease-out`,
});
