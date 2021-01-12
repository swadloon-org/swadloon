import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyPluginLayoutCoreOptions } from '../plugins/gatsby-plugin-layout-core';

const defaultOptions: GatsbyPluginLayoutCoreOptions = {
  packageName: 'package',
  layoutComponentPath: `src/layout/layout`,
  providersComponentPath: `src/context/providers`,
};

export function getGastbyPluginLayoutCoreConfig({
  packageName = defaultOptions.packageName,
  layoutComponentPath = defaultOptions.layoutComponentPath,
  providersComponentPath = defaultOptions.providersComponentPath,
}: GatsbyPluginLayoutCoreOptions = defaultOptions): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-layout-core`),
    options: {
      packageName,
      layoutComponentPath,
      providersComponentPath,
    },
  };
}
