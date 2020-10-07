import { Color } from '@newrade/core-design-system';
import CSSTypes from 'csstype';

export function getCSSColor({ h, s, l, a }: Partial<Color>): CSSTypes.Color {
  return `hsl(${h}deg ${s}% ${l}% / ${a || 100}%)`;
}

export function lightenColor(color: Color, amount: number): Color {
  return {
    ...color,
    l: color.l + amount,
  };
}

export function darkenColor(color: Color, amount: number): Color {
  return lightenColor(color, -amount);
}
