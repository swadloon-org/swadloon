import { GatsbyNode } from 'gatsby';
import TreatPlugin from 'treat/webpack-plugin';
import { WebpackOptions } from 'webpack/declarations/WebpackOptions';

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-treat',
    options: {},
  });
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  const isProduction = stage !== `develop`;
  const isSSR = stage.includes(`html`);

  if (stage === 'develop-html') {
    return {};
  }

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
  const productionPlugins: WebpackOptions['plugins'] = [];

  // const sassRule = {
  //   test: /\.s(a|c)ss$/,
  //   use: isSSR
  //     ? [loaders.null()]
  //     : [
  //         loaders.miniCssExtract(),
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

  const config = {
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          oneOf: [],
        },
      ],
    },
    plugins: isProduction ? [...commonPlugins, ...productionPlugins] : [...commonPlugins],
  };

  actions.setWebpackConfig(config);
};
