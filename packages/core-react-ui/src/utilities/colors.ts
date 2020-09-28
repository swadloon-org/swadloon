import { Color } from '@newrade/core-design-system';

export function getHSLColor({ h, s, l, a }: Partial<Color> = { h: 200, s: 100, l: 100, a: 1 }) {
  return `hsla(${h}, ${s}%, ${l}%, ${a || 1})`;
}

export function lightenColor(color: Color, amount: number) {}

export function darkenColor(color: Color, amount: number) {}
