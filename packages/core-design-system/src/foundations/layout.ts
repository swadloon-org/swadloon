import { ContentMargins, ContentWidths } from './content-width';
import { MediaQueries, MediaQueryGroup } from './media-queries';

/**
 * Viewport names.
 */
export enum VIEWPORT {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop',
}

/**
 * Breakpoint names
 */
export enum BREAKPOINT {
  //
  // mobile
  //
  mobileXSmall = 'mobileXSmall',
  mobileSmall = 'mobileSmall',
  mobileMedium = 'mobileMedium',
  //
  // tablet
  //
  tabletPortrait = 'tabletPortrait',
  tabletLandscape = 'tabletLandscape',
  //
  // desktop
  //
  desktopSmall = 'desktopSmall',
  desktopMedium = 'desktopMedium',
  desktopLarge = 'desktopLarge',
  desktopXLarge = 'desktopXLarge',
}

/**
 * Representation of a breakpoint in px
 */
export type Breakpoint = number;

/**
 * Breakpoints values in pixel
 */
export type Breakpoints<BreakpointType = number> = { [key in keyof typeof BREAKPOINT]: BreakpointType };

/**
 * Breakpoints, commonly used content margins and max widths.
 */
export interface Layout<BreakpointType = number, MediaQueryType = MediaQueryGroup> {
  breakpoints: Breakpoints<BreakpointType>;
  media: MediaQueries<MediaQueryType>;
  contentMargins: ContentMargins;
  contentWidth: ContentWidths;
}
