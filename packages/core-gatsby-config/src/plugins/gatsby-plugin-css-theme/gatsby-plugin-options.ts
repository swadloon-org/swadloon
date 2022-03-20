import { COLOR_MODE, COLOR_SCHEME, ColorModeProps, Variant } from '@newrade/core-design-system';

export type GatsbyPluginCSSThemeOptions = {
  /**
   * Name of the package that runs this plugin
   * @example my-website
   */
  packageName?: string;
  /**
   * Plugin name for logging purposes
   * @example gatsby-plugin-core
   */
  pluginName?: string;
  /**
   * Option to forces the scheme to a defined value, user's device preference
   * or any previously set value in localstorage
   * @default undefined
   */
  forcedThemeScheme?: COLOR_SCHEME;
};
