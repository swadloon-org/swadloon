import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCorePluginOptions } from '../plugins/gatsby-plugin-core';

export function getGastbyCorePluginConfig(
  {
    packageName = 'package',
    pluginName = 'gastby-plugin-core',
    features = {
      renderDesignSystemPages: true,
      renderDocsPages: true,
      renderUnpublishedDocsPages: true,
    },
  }: GatsbyCorePluginOptions = {
    packageName: 'package',
    features: {
      renderDesignSystemPages: true,
      renderDocsPages: true,
      renderUnpublishedDocsPages: true,
    },
  }
): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core`),
    options: {
      packageName,
      pluginName,
      features,
    },
  };
}
