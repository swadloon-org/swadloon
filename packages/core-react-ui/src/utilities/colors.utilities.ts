import { Color } from '@newrade/core-design-system';

export function getHSLColor({ h, s, l, a }: Partial<Color>) {
  return `hsl(${h}deg ${s}% ${l}% / ${a || 100}%)`;
  // return `hsla(${h}, ${s}%, ${l}%, ${a || 1})`;
}

export function lightenColor(color: Color, amount: number) {}

export function darkenColor(color: Color, amount: number) {}
