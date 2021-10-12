import { Breakpoints, ContentWidths, Layout, LayoutV2 } from '@newrade/core-design-system';

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

export type CSSLayout = Layout<string> & {
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
};

export type CSSLayoutV2 = LayoutV2<string> & {
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
};
