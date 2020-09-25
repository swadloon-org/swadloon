import { Color } from '@newrade/core-design-system';

export function createColor(options: Partial<Color>) {
  return options.a?.toString();
}

export function lightenColor(color: Color, amount: number) {}

export function darkenColor(color: Color, amount: number) {}
