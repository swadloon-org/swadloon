import { PluginRef } from 'gatsby';

import { GatsbyPluginCSSThemeOptions } from '../plugins/gatsby-plugin-css-theme';

const defaultOptions: GatsbyPluginCSSThemeOptions = {
  packageName: 'package',
  pluginName: 'gastby-plugin-css-theme',
  forcedThemeScheme: undefined,
};

/**
 * Get a preconfigured config object for gatsby-plugin-css-theme
 */
export function getGastbyPluginCssThemeConfig(options?: GatsbyPluginCSSThemeOptions): PluginRef {
  const pluginOptions = { ...defaultOptions, ...options };
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-css-theme`),
    options: pluginOptions,
  };
}
