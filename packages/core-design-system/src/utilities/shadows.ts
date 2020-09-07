import { rgba } from 'polished';
import { BoxShadow } from '../foundations/effects';

export function createShadow(options: Omit<BoxShadow, 'css'>): BoxShadow {
  return {
    ...options,
    css: `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${options.color}`,
  };
}
