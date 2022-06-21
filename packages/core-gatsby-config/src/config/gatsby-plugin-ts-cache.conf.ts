import { PluginRef } from 'gatsby';

import { GatsbyPluginTsCacheOptions } from '../plugins/gatsby-plugin-ts-cache.js';

const defaultOptions: Required<GatsbyPluginTsCacheOptions> = {
  packageName: 'package',
  pluginName: 'gastby-plugin-ts-cache',
  cache: true,
};

export function getGastbyPluginTsCacheConfig({
  packageName = defaultOptions.packageName,
  pluginName = defaultOptions.pluginName,
  cache = defaultOptions.cache,
}: GatsbyPluginTsCacheOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-ts-cache`),
    options: {
      packageName,
      pluginName,
      cache,
    } as GatsbyPluginTsCacheOptions,
  };
}
