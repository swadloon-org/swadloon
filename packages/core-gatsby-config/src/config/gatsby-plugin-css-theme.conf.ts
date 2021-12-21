import { PluginRef } from 'gatsby';

import { GatsbyPluginCSSThemeOptions } from '../plugins/gatsby-plugin-css-theme';

const defaultOptions: Required<GatsbyPluginCSSThemeOptions> = {
  packageName: 'package',
  pluginName: 'gastby-plugin-css-theme',
};

/**
 * Get a preconfigured config object for gatsby-plugin-css-theme
 */
export function getGastbyPluginCssThemeConfig({
  packageName = defaultOptions.packageName,
  pluginName = defaultOptions.pluginName,
}: GatsbyPluginCSSThemeOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-css-theme`),
    options: {
      packageName,
      pluginName,
    } as GatsbyPluginCSSThemeOptions,
  };
}
