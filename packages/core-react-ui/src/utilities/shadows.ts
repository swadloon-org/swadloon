import { BoxShadow } from '@newrade/core-design-system';
import { defaultTheme } from 'src/design-system/default-theme';
import { getCSSColor } from './colors.utilities';
import { defaultShadowsShadows } from '../design-system/default-effects';

export function getCSSShadow(options: BoxShadow): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${getCSSColor(
    options.color
      ? options.color
      : {
          h: 100,
          s: 100,
          l: 100,
          a: 20,
        }
  )}`;
}

export function createDefaultShadows() {}
