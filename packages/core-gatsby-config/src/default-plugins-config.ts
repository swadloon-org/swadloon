import Gatsby from 'gatsby';

import { getGatsbyTsPluginConfig } from './gatsby-ts-plugin';

export const defaultPlugins: Gatsby.PluginRef[] = [
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.svg$/,
      },
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      cssLoaderOptions: {
        localIdentName: '[name]_[local]_[hash:base64:5]',
      },
    },
  },
  getGatsbyTsPluginConfig(),
];
