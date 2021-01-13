import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCorePluginOptions } from '../plugins/gatsby-plugin-core';

export function getGastbyCorePluginConfig(
  options: GatsbyCorePluginOptions = { packageName: 'package', enableDesignSystemPages: true, enableDocsPages: true }
): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core`),
    options,
  };
}
