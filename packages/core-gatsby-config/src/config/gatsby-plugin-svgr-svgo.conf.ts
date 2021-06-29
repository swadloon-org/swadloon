import Gatsby from 'gatsby';
import { svgoConfig } from '@newrade/core-webpack-config';

/**
 * Return a `gatsby-plugin-svgr-svgo` configuration object.
 * @see https://github.com/pixel-point/gatsby-plugin-svgr-svgo
 * @see https://github.com/svg/svgo#what-it-can-do for svgoConfig
 */
export function getGatsbyReactSvgrSvgoConfig(): Gatsby.PluginRef {
  return {
    resolve: 'gatsby-plugin-svgr-svgo',
    options: {
      inlineSvgOptions: [
        {
          test: /\.svg$/,
          native: false,
          ref: true,
          svgoConfig,
        },
      ],
      urlSvgOptions: [
        {
          test: /\.url.svg$/,
          native: false,
          ref: true,
          svgoConfig,
          urlLoaderOptions: {
            limit: 512,
          },
        },
      ],
    },
  };
}
