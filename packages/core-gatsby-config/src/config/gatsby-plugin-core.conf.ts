import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCorePluginOptions } from '../plugins/gatsby-plugin-core';

export function getGastbyCorePluginConfig(
  {
    packageName = 'package',
    pluginName = 'gastby-plugin-core',
    enableDesignSystemPages = true,
    enableDocsPages = true,
  }: GatsbyCorePluginOptions = {
    packageName: 'package',
    enableDesignSystemPages: true,
    enableDocsPages: true,
  }
): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core`),
    options: {
      packageName,
      pluginName,
      enableDesignSystemPages,
      enableDocsPages,
    },
  };
}
