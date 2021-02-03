import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCoreContentfulPluginOptions } from '../plugins/gatsby-plugin-core-contentful';

const defaultOptions: GatsbyCoreContentfulPluginOptions = {
  packageName: 'package',
  locales: ['fr-CA', 'en-CA'],
  features: {
    blog: true,
    portfolio: true,
  },
};

export function getGastbyCoreContentfulPluginConfig({
  packageName = defaultOptions.packageName,
  locales = defaultOptions.locales,
  features: { blog = defaultOptions.features.blog, portfolio = defaultOptions.features.portfolio },
}: GatsbyCoreContentfulPluginOptions = defaultOptions): PluginRef {
  return {
    resolve: path.resolve(__dirname, `../../lib/plugins/gatsby-plugin-core-contentful`),
    options: {
      packageName,
      locales,
      features: {
        blog,
        portfolio,
      },
    },
  };
}
