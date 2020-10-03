import { cssLoader } from '@newrade/core-webpack-config';
import { CreateBabelConfigArgs, WebpackLoaders, WebpackPlugins } from 'gatsby';
import TreatPlugin from 'treat/webpack-plugin';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';

export function createGatsbyWebpackConfig({
  isProduction,
  stage,
  isSSR,
  loaders,
  plugins,
}: {
  isProduction: boolean;
  stage: CreateBabelConfigArgs['stage'];
  isSSR: boolean;
  loaders: WebpackLoaders;
  plugins: WebpackPlugins;
}): WebpackOptions {
  if (stage === 'develop-html') return {};

  const commonPlugins = [
    new TreatPlugin({
      localIdentName: '[name]_[local]_[hash:base64:5]',
      themeIdentName: '_[name]-[local]_',
      outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
      outputLoaders: [loaders.miniCssExtract()],
    }),
    // getTreatCSSPlugin({
    //   isSSR,
    //   outputLoaders: [loaders.miniCssExtract()],
    // }),
  ];

  // const productionPlugins = [bundleVisualizerPlugin];
  const devPlugins = [];
  const productionPlugins = [];

  const cssRule = {
    test: /\.css$/,
    use: isSSR
      ? [loaders.null()]
      : [loaders.miniCssExtract({ hmr: false }), loaders.css({ ...(cssLoader as any).query, modules: false })],
  };

  // const sassRule = {
  //   test: /\.s(a|c)ss$/,
  //   use: isSSR
  //     ? [loaders.null()]
  //     : [
  //         loaders.miniCssExtract({ hmr: true }),
  //         loaders.css({ ...(cssLoader as any).query, importLoaders: 2 }),
  //         loaders.postcss(),
  //         scssLoader,
  //       ],
  // };

  // const sassRuleModules = {
  //   test: /\.module\.s(a|c)ss$/,
  //   use: [
  //     !isSSR && loaders.miniCssExtract({ hmr: false }),
  //     loaders.css({ ...(cssLoader as any).query, modules: true, importLoaders: 2 }),
  //     loaders.postcss(),
  //     scssLoader,
  //   ].filter(Boolean),
  // };

  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          oneOf: [cssRule],
        },
      ],
    },
    plugins: isProduction ? [...commonPlugins, ...productionPlugins] : [...commonPlugins, ...devPlugins],
  };
}
