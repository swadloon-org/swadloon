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
 * Contains CSS variable names for layout sizes
 * @example `--layout-size-navbar`
 */
export type LayoutVarNames = {
  breakpoints: Breakpoints<string>;
  contentMargins: string;
  contentWidth: ContentWidths<string>;
  sidebarWidth: string;
  navbarHeight: string;
  asideWidth: string;
  footerHeight: string;
};

/**
 * Contains CSS statement to access CSS variables
 * @example `var(--layout-size-navbar)`
 */
export type LayoutVars = LayoutVarNames;

export type PartialLayout<Override extends undefined | string = undefined> = Omit<
  Layout<Override>,
  'var' | 'varNames' | 'media' | 'zIndex'
>;

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
  navbarHeight: {
    [key in keyof typeof VIEWPORT]: SizeType<Override>;
  };
  asideWidth: SizeType<Override>;
  footerHeight: {
    [key in keyof typeof VIEWPORT]: SizeType<Override>;
  };
  media: MediaQueries<Override>;
  /**
   * CSS variable name for each step.
   * @example `--layout-navbar-height`
   */
  varNames: LayoutVarNames;
  /**
   * CSS statement to access CSS variables
   * @example `var(--layout-navbar-height)`
   */
  var: LayoutVars;
  /**
   * One place to define the different z indexes
   */
  zIndex: {
    chatBubble: number;
    notifications: number;
    navBar: number;
    sideBarMobile: number;
    sideBarDesktop: number;
    dialog: number;
    content: number;
  };
}
