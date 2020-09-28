import { BoxShadow } from '@newrade/core-design-system';
import { getHSLColor } from './colors';

export function getCSSShadow(options: BoxShadow): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${getHSLColor(
    options.color
  )}`;
}
