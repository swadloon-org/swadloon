import { PluginRef } from 'gatsby';
import path from 'path';
import { GatsbyCoreContentfulPluginOptions } from '../plugins/gatsby-plugin-core-contentful';

const defaultOptions: GatsbyCoreContentfulPluginOptions = {
  pluginName: 'gatsby-plugin-core-contentful',
  packageName: 'package',
  locales: ['fr-CA', 'en-CA'],
  features: {
    renderPages: true,
    renderBlogPosts: true,
    renderPortfolio: true,
  },
};

export function getGastbyCoreContentfulPluginConfig({
  pluginName = defaultOptions.pluginName,
  packageName = defaultOptions.packageName,
  locales = defaultOptions.locales,
  features: {
    renderBlogPosts: blog = defaultOptions.features.renderBlogPosts,
    renderPortfolio: portfolio = defaultOptions.features.renderPortfolio,
  },
}: GatsbyCoreContentfulPluginOptions = defaultOptions): PluginRef {
  return {
    resolve: require.resolve(`../plugins/gatsby-plugin-core-contentful`),
    options: {
      pluginName,
      packageName,
      locales,
      features: {
        blog,
        portfolio,
      },
    },
  };
}
