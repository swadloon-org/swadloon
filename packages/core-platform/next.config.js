// @ts-check

const v8 = require('v8');
const webpack = require('webpack');
const withTranspileModulesFn = require('next-transpile-modules');
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const nodeExternals = require('webpack-node-externals');

const withVanillaExtract = createVanillaExtractPlugin();

console.log(v8.getHeapStatistics()?.heap_size_limit);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: false, // not in use
  },
  experimental: {
    emotion: false, // not in use
    externalDir: false, // does not work properly
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'abs.twimg.com',
      'pbs.twimg.com',
      'avatars.githubusercontent.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
  /**
   *
   * @param {import('webpack').Configuration} config
   * @param {import('next/dist/server/config-shared').WebpackConfigContext} context
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, context) => {
    config.node = {
      ...config.node,
      __dirname: true,
    };
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );
    return config;
  },
};

/**
 * Modules set for transpilation (outside of root)
 */
// const withTranspileModules = withTranspileModulesFn([
//   // '@newrade/core-react-ui',
//   '@newrade/core-common',
//   '@newrade/core-design-system',
// ]);

module.exports = withVanillaExtract(nextConfig);
