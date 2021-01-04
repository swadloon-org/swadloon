import { SizeType } from '../types';
import { ContentMargins, ContentWidths } from './content-width';
import { MediaQueries } from './media-queries';

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
export type Breakpoints<Override extends undefined | string = undefined> = {
  [key in keyof typeof BREAKPOINT]: Override extends string ? string : Breakpoint;
};

/**
 * Breakpoints, commonly used content margins and max widths.
 */
export interface Layout<Override extends undefined | string = undefined> {
  breakpoints: Breakpoints<Override>;
  contentMargins: ContentMargins<Override>;
  contentWidth: ContentWidths;
  sidebarWidth: {
    [key in keyof typeof VIEWPORT]: SizeType<Override>;
  };
  topbarHeight: {
    [key in keyof typeof VIEWPORT]: SizeType<Override>;
  };
  asideWidth: SizeType<Override>;
  footerHeight: {
    [key in keyof typeof VIEWPORT]: SizeType<Override>;
  };
  media: MediaQueries<Override>;
}
