import { GlobalCssTypeName } from '../global/global-theme-classnames';

import { CSSDesignSystem } from './css-design-system';

/**
 * Object to hold the CSSDesignSystem runtime data
 */
export type CSSRuntimeThemeConfig = Pick<CSSDesignSystem, 'name' | 'colorScheme'> & {
  /**
   * if autoDetect is false and there were no previously set theme, the first default theme matching the user's color scheme is selected from the list
   * @default false
   */
  default: boolean;
  /**
   * Class name to inject the theme's classname
   */
  className: GlobalCssTypeName;
};

/**
 * Object to hold the runtime data for each theme (e.g. name and classes to inject custom variables)
 */
export type CSSThemeProviderConfig = {
  /**
   * List of available themes
   */
  themes: CSSRuntimeThemeConfig[];
};
