export interface Color {
  r: number;
  g: number;
  b: number;

  h: number;
  s: number;
  l: number;

  hex: string;

  a: number;

  css: string;
}

export function createColor(options: Partial<Color>) {}

export function lightenColor(color: Color, amount: number) {}

export function darkenColor(color: Color, amount: number) {}
