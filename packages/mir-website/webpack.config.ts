import { cssLoader, scssLoader, bundleVisualizerPlugin } from 'core-webpack-config';
import { WebpackLoaders, WebpackPlugins, CreateBabelConfigArgs } from 'gatsby';
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
      localIdentName: '[name]-[local]',
      themeIdentName: '_[name]-[local]_',
      outputCSS: isSSR ? false : true, // https://seek-oss.github.io/treat/setup#server-side-rendering
      outputLoaders: [loaders.miniCssExtract()],
    }),
  ];

  const productionPlugins = [bundleVisualizerPlugin];

  return {
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.s(a|c)ss$/,
              use: isSSR
                ? [loaders.null()]
                : [
                    loaders.miniCssExtract(),
                    loaders.css({ ...(cssLoader as any).query, importLoaders: 1 }),
                    // loaders.postcss(postCssLoader.options),
                    scssLoader,
                  ],
            },
          ],
        },
      ],
    },
    plugins: isProduction ? [...commonPlugins, ...productionPlugins] : [...commonPlugins],
  };
}
