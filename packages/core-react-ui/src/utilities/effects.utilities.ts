import { BoxShadow, Effects, TextShadow } from '@newrade/core-design-system';
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
      previous[current] = {} as any;
    }
    shadowsKey.forEach((shadowName) => {
      if (current === 'textShadows') {
        const shadow = options[current][shadowName];
        previous[current][shadowName] = getCSSTextShadow(shadow);
        return;
      }
      const shadowOrShadows = options[current][shadowName];
      if (Array.isArray(shadowOrShadows)) {
        previous[current][shadowName] = shadowOrShadows.map(getCSSBoxShadow).join(', ');
        return;
      }
      previous[current][shadowName] = getCSSBoxShadow(shadowOrShadows as BoxShadow);
    });
    return previous;
  }, {} as Effects<string>);
}

/**
 * Returns a CSS BoxShadow string with HSL color.
 */
export function getCSSBoxShadow(options: BoxShadow): string {
  return [
    `${options.type ? (options.type === 'inset' ? 'inset' : '') : ''}`,
    `${options.offsetX ? options.offsetX : 0}px`,
    `${options.offsetY ? options.offsetY : 0}px`,
    `${options.blur ? options.blur : 0}px`,
    `${options.spread ? options.spread : 0}px`,
    getCSSColor(
      options.color
        ? options.color
        : {
            h: 100,
            s: 100,
            l: 100,
            a: 20,
          }
    ),
  ].join(' ');
}

/**
 * Returns a CSS text-shadow string with HSL color.
 */
export function getCSSTextShadow(options: TextShadow): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${getCSSColor(
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
