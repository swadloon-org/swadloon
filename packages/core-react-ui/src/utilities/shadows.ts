import { BoxShadow } from 'core-design-system/src/foundations/effects';

export function getCSSShadow(options: BoxShadow): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${options.color}`;
}
