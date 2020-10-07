import { BoxShadow } from '@newrade/core-design-system';
import { getCSSColor } from './colors.utilities';

export function getCSSShadow(options: BoxShadow): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${getCSSColor(
    options.color
      ? options.color
      : {
          h: 0,
          s: 100,
          l: 100,
          a: 20,
        }
  )}`;
}
