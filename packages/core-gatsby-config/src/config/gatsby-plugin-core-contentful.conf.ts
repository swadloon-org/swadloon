import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCoreContentfulPluginOptions } from '../plugins/gatsby-plugin-core-contentful';

export function getGastbyCoreContentfulPluginConfig(
  options: GatsbyCoreContentfulPluginOptions = { packageName: 'package' }
): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core-contentful`),
    options,
  };
}
