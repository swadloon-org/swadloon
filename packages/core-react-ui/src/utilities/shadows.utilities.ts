import { BoxShadow, Shadows } from '@newrade/core-design-system';
import { defaultShadowsShadows } from '../design-system/default-effects';
import { getCSSColor } from './colors.utilities';

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

export function createDefaultShadows({ shadows }: { shadows: Shadows }) {
  // const shadowsArray: Shadows = [];

  // Object.keys(shadows).forEach((current) => {
  //   return current;
  // });

  return defaultShadowsShadows;
}

createDefaultShadows({ shadows: defaultShadowsShadows });
