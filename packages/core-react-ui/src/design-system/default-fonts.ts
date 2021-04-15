import { Font } from '@newrade/core-design-system';

export const defaultSerifFont: Font = {
  name: 'PT Serif',
  link: 'https://fonts.google.com/specimen/PT+Serif',
  fontMetrics: {
    capHeight: 700,
    ascent: 1039,
    descent: -286,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

export const defaultSansFont: Font = {
  name: 'Inter',
  link: 'https://fonts.google.com/specimen/Inter',
  fontMetrics: {
    capHeight: 2048,
    ascent: 2728,
    descent: -680,
    lineGap: 0,
    unitsPerEm: 2816,
  },
};

export const defaultSansAlternateFont: Font = defaultSansFont;

export const defaultMonospaceFont: Font = {
  name: 'Source Sans Pro',
  link: 'https://fonts.google.com/specimen/Source+Sans+Pro',
  fontMetrics: {
    capHeight: 660,
    ascent: 984,
    descent: -273,
    lineGap: 0,
    unitsPerEm: 1000,
  },
};

export const defaultFallbackSansFonts: Font[] = [
  {
    name: 'ui-sans-serif',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: 'system-ui', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: '-apple-system',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: 'BlinkMacSystemFont',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: '"Segoe UI"', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'Roboto', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: '"Helvetica Neue"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: 'Arial', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: '"Noto Sans"', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'sans-serif', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: '"Apple Color Emoji"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: '"Segoe UI Emoji"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: '"Segoe UI Symbol"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: '"Noto Color Emoji"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
];

export const defaultFallbackSerifFonts: Font[] = [
  { name: 'ui-serif', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'Georgia', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'Cambria', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: '"Times New Roman"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: 'Times', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'serif', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
];

export const defaultFallbackMonospaceFonts: Font[] = [
  { name: 'ui-monospace', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: 'SFMono-Regular',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: 'Menlo', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'Monaco', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  { name: 'Consolas', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
  {
    name: '"Liberation Mono"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: '"Courier New"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  { name: 'monospace', fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 } },
];
