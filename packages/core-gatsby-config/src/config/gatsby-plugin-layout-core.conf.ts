import path from 'path';

import { PluginRef } from 'gatsby';

import { GatsbyPluginLayoutCoreOptions } from '../plugins/gatsby-plugin-layout-core.js';

const defaultOptions: GatsbyPluginLayoutCoreOptions = {
  packageName: 'package',
  layoutComponentPath: `src/layout/layout`,
  providersComponentPath: `src/providers/providers`,
};

export function getGastbyPluginLayoutCoreConfig({
  packageName = defaultOptions.packageName,
  layoutComponentPath = defaultOptions.layoutComponentPath,
  providersComponentPath = defaultOptions.providersComponentPath,
}: GatsbyPluginLayoutCoreOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../../lib/plugins/gatsby-plugin-layout-core`),
    options: {
      packageName,
      layoutComponentPath,
      providersComponentPath,
    },
  };
}
