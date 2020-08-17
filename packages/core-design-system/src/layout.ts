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
 * Breakpoints values in pixel.
 */
export type Breakpoints = { [key in keyof typeof BREAKPOINT]: number };

/**
 * Content margins for different device formats.
 */
export interface ContentMargins {
  mobile: number;
  tablet: number;
  desktop: number;
}

/**
 * Content max width for larger viewports.
 */
export interface ContentWidths {
  desktopMaxWidth: number;
}

/**
 * Breakpoints, commonly used content margins and max widths.
 */
export interface Layout {
  breakpoints: Breakpoints;
  contentMargins: ContentMargins;
  contentWidth: ContentWidths;
}
