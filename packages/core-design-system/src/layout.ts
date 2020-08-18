import { Value } from './value';

/**
 * Viewport names.
 */
export enum VIEWPORT {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
}

/**
 * Breakpoint names.
 */
export enum BREAKPOINT {
  MOBILE_X_SMALL = 'MOBILE_X_SMALL', // mobile
  MOBILE_SMALL = 'MOBILE_SMALL',
  MOBILE_MEDIUM = 'MOBILE_MEDIUM',
  TABLET_PORTRAIT = 'TABLET_PORTRAIT', // tablet
  TABLET_LANDSCAPE = 'TABLET_LANDSCAPE',
  DESKTOP_SMALL = 'DESKTOP_SMALL',
  DESKTOP_MEDIUM = 'DESKTOP_MEDIUM', // desktop
  DESKTOP_LARGE = 'DESKTOP_LARGE',
  DESKTOP_X_LARGE = 'DESKTOP_X_LARGE',
}

/**
 * Representation of a breakpoint, including its value
 * in pixel, and a default media query to activate it
 */
export interface Breakpoint {
  /**
   * @example 999
   */
  value: number;
  /**
   * @example `999px`
   */
  valuePx: string;
  /**
   * @example `@media screen and (min-width: 999px)`
   */
  mediaQuery?: string;
}

/**
 * Breakpoints values in pixel.
 */
export type Breakpoints = { [key in keyof typeof BREAKPOINT]: Breakpoint };

/**
 * Content margins for different device formats.
 */
export type ContentMargins = { [key in keyof typeof VIEWPORT]: Value };

/**
 * Content max width for larger viewports.
 */
export interface ContentWidths {
  desktopMaxWidth: Value;
}

/**
 * Breakpoints, commonly used content margins and max widths.
 */
export interface Layout {
  breakpoints: Breakpoints;
  contentMargins: ContentMargins;
  contentWidth: ContentWidths;
}
