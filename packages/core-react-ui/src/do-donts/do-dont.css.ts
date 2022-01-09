import { style } from '@vanilla-extract/css';

/**
 * Wrapper
 */
export const wrapper = style({
  position: 'relative',
  width: `100%`,
});

/**
 * Base
 */
export const base = style({
  display: 'block',
  maxWidth: '100%', // ensure it respect the parent's width
  color: '#000000',
});

/**
 * Icon
 */
export const icon = style({
  display: 'block',
  position: 'absolute',
  left: 'calc(1rem - 1px)',
  top: 'calc(1rem - 1px)',
  zIndex: 10,
  width: '24px',
  height: '24px',
  color: 'black',
});

/**
 * Do
 */
export const doStyle = style({
  backgroundColor: '#49DC31',
});

/**
 * Dont
 */
export const dontStyle = style({
  backgroundColor: '#E31313',
});
