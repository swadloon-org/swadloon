import {
  BoxShadow,
  BoxShadows,
  Effects,
  OutlineShadows,
  TextShadow,
  TextShadows,
} from '@newrade/core-design-system';

import { keys } from '../utilities-iso/utilities';

import { getCSSColor } from './colors.utilities';

/**
 * Transform the Effects object into a CSS compatible one.
 */
export function getCSSEffects(options: Effects): Effects<string> {
  const effects = keys(options).filter((effect) => effect !== 'vars') as (keyof Omit<
    Effects<undefined>,
    'vars'
  >)[];

  return effects.reduce((previous, current) => {
    const shadows = options[current];
    if (!shadows) {
      return previous;
    }
    const shadowsProp = keys(shadows) as (
      | keyof BoxShadows
      | keyof TextShadows
      | keyof OutlineShadows
    )[];
    if (!previous[current]) {
      previous[current] = {} as any;
    }
    shadowsProp.forEach((shadowName) => {
      if (!(options[current] as any)[shadowName]) {
        return;
      }

      if (current === 'textShadows') {
        const textShadow = options[current][shadowName as keyof TextShadows];
        previous[current][shadowName as keyof TextShadows] = getCSSTextShadow(textShadow);
        return;
      }

      if (current === 'outlineShadows') {
        const outlineShadows = options[current][shadowName as keyof OutlineShadows];
        if (Array.isArray(outlineShadows)) {
          previous[current][shadowName as keyof OutlineShadows] = outlineShadows
            .map(getCSSBoxShadow)
            .join(', ');
          return;
        }
        previous[current][shadowName as keyof OutlineShadows] = getCSSBoxShadow(outlineShadows);
        return;
      }
      const shadows = options[current][shadowName as keyof BoxShadows];
      if (Array.isArray(shadows)) {
        previous[current][shadowName as keyof BoxShadows] = shadows.map(getCSSBoxShadow).join(', ');
        return;
      }
      previous[current][shadowName as keyof BoxShadows] = getCSSBoxShadow(shadows);
      return;
    });
    return previous;
  }, {} as Effects<string>);
}

/**
 * Returns one or more CSS BoxShadow as string with HSL color.
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
  ]
    .filter((part) => !!part.length)
    .join(' ');
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
