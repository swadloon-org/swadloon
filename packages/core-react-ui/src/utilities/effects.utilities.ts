import { BoxShadow, Effects, Shadows } from '@newrade/core-design-system';
import { getCSSColor } from './colors.utilities';
import { keys } from './utilities';

/**
 * Transform the Effects object into a CSS compatible one.
 */
export function getCSSEffects(options: Effects): Effects<string> {
  const effects = keys(options);
  return effects.reduce((previous, current) => {
    const shadows = options[current];
    const shadowsKey = keys(shadows);
    if (!previous[current]) {
      previous[current] = {} as Shadows<string>;
    }
    shadowsKey.forEach((shadow) => {
      previous[current][shadow] = getCSSShadow(options[current][shadow]);
    });
    return previous;
  }, {} as Effects<string>);
}

/**
 * Returns a CSS BoxShadow string with HSL color.
 */
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
