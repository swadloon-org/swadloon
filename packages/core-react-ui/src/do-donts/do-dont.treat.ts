import { style } from 'treat';
import { Theme } from '../design-system';

/**
 * Wrapper
 */
export const wrapper = style(({ theme, cssTheme }: Theme) => ({
  position: 'relative',
  width: `100%`,
}));

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  display: 'block',
  maxWidth: '100%', // ensure it respect the parent's width
  color: '#000000',
}));

/**
 * Icon
 */
export const icon = style(({ theme, cssTheme }: Theme) => ({
  display: 'block',
  position: 'absolute',
  left: 'calc(1rem - 1px)',
  top: 'calc(1rem - 1px)',
  zIndex: 10,
  width: '24px',
  height: '24px',
  color: 'black',
}));

/**
 * Do
 */
export const do = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: '#49DC31',
}));

/**
 * Dont
 */
export const dont = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor:'#E31313',
}));
