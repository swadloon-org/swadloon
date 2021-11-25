import { PluginRef } from 'gatsby';

import { GatsbyPluginTsCacheOptions } from '../plugins/gatsby-plugin-ts-cache';

const defaultOptions: Required<GatsbyPluginTsCacheOptions> = {
  packageName: 'package',
  pluginName: 'gastby-plugin-ts-cache',
};

export function getGastbyPluginTsCacheConfig({
  packageName = defaultOptions.packageName,
  pluginName = defaultOptions.pluginName,
}: GatsbyPluginTsCacheOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-ts-cache`),
    options: {
      packageName,
      pluginName,
    } as GatsbyPluginTsCacheOptions,
  };
}
