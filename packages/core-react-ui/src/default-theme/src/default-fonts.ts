import { FontMetrics } from '@capsizecss/core';

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

export const SFProFontMetric: FontMetrics = {
  capHeight: 1443,
  ascent: 1950,
  descent: -494,
  lineGap: 0,
  unitsPerEm: 2048,
};

export const SFMonoFontMetric: FontMetrics = {
  capHeight: 1443,
  ascent: 1950,
  descent: -494,
  lineGap: 0,
  unitsPerEm: 2048,
};

/**
 * System fonts fallback
 *
 * Note: since font metrics can't be computed dynamically
 * (we don't know what system fonts users will have), we fallback on the SF Pro metrics
 *
 * @see https://seek-oss.github.io/capsize/
 * @see https://developer.apple.com/fonts/
 */
export const defaultFallbackSansFonts: Font[] = [
  {
    name: 'ui-sans-serif',
    fontMetrics: SFProFontMetric,
  },
  {
    name: 'system-ui',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '-apple-system',
    fontMetrics: SFProFontMetric,
  },
  {
    name: 'BlinkMacSystemFont',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Segoe UI"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: 'Roboto',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Helvetica Neue"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: 'Arial',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Noto Sans"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: 'sans-serif',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Apple Color Emoji"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Segoe UI Emoji"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Segoe UI Symbol"',
    fontMetrics: SFProFontMetric,
  },
  {
    name: '"Noto Color Emoji"',
    fontMetrics: SFProFontMetric,
  },
];

/**
 * System fonts fallback (serif)
 *
 * Note: since font metrics can't be computed dynamically
 * (we don't know what system fonts users will have), we fallback on the SF Pro metrics
 *
 * @see https://seek-oss.github.io/capsize/
 * @see https://developer.apple.com/fonts/
 */
export const defaultFallbackSerifFonts: Font[] = [
  {
    name: 'ui-serif',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: 'Georgia',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: 'Cambria',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: '"Times New Roman"',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: 'Times',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
  {
    name: 'serif',
    fontMetrics: { capHeight: 1456, ascent: 1900, descent: -500, lineGap: 0, unitsPerEm: 2048 },
  },
];

/**
 * System fonts fallback (mono)
 *
 * Note: since font metrics can't be computed dynamically
 * (we don't know what system fonts users will have), we fallback on the SFMono-Regular metrics
 *
 * @see https://seek-oss.github.io/capsize/
 * @see https://developer.apple.com/fonts/
 */
export const defaultFallbackMonospaceFonts: Font[] = [
  {
    name: 'ui-monospace',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: 'SFMono-Regular',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: 'Menlo',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: 'Monaco',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: 'Consolas',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: '"Liberation Mono"',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: '"Courier New"',
    fontMetrics: SFMonoFontMetric,
  },
  {
    name: 'monospace',
    fontMetrics: SFMonoFontMetric,
  },
];
