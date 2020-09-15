import { cssLoader, getTreatCSSPlugin, scssLoader } from 'core-webpack-config';
import { CreateBabelConfigArgs, WebpackLoaders, WebpackPlugins } from 'gatsby';
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
    getTreatCSSPlugin({
      isSSR,
      outputLoaders: [loaders.miniCssExtract()],
    }),
  ];

  // const productionPlugins = [bundleVisualizerPlugin];
  const productionPlugins = [];

  const sassRule = {
    test: /\.s(a|c)ss$/,
    use: isSSR
      ? [loaders.null()]
      : [
          loaders.miniCssExtract(),
          loaders.css({ ...(cssLoader as any).query, importLoaders: 2 }),
          loaders.postcss(),
          scssLoader,
        ],
  };

  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      !isSSR && loaders.miniCssExtract({ hmr: false }),
      loaders.css({ ...(cssLoader as any).query, modules: true, importLoaders: 2 }),
      loaders.postcss(),
      scssLoader,
    ].filter(Boolean),
  };

  return {
    module: {
      rules: [
        {
          oneOf: [sassRuleModules, sassRule],
        },
      ],
    },
    plugins: isProduction ? [...commonPlugins, ...productionPlugins] : [...commonPlugins],
  };
}
