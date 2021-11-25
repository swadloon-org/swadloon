import path from 'path';

import { PluginRef } from 'gatsby';

import { GatsbyPluginCoreDllOptions } from '../plugins/gatsby-plugin-core-dll/gatsby-plugin-options';

const defaultOptions: Required<GatsbyPluginCoreDllOptions> = {
  packageName: 'package',
  pluginName: 'gastby-plugin-core-dll',
};

/**
 * Add the `gatsby-plugin-core-dll` plugin
 */
export function getGastbyPluginCoreDllConfig({
  packageName = defaultOptions.packageName,
  pluginName = defaultOptions.pluginName,
}: GatsbyPluginCoreDllOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-core-dll`),
    options: {
      packageName,
      pluginName,
    } as GatsbyPluginCoreDllOptions,
  };
}
