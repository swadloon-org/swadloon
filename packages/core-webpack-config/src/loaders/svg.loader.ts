import { RuleSetRule } from 'webpack/declarations/WebpackOptions';

export const svgLoader: RuleSetRule = {
  test: /\.(svg)$/,
  use: [
    {
      loader: 'svg-react-loader',
    },
    {
      loader: 'svgo-loader',
      options: {
        /**
         * https://github.com/svg/svgo#configuration
         */
        // plugins: [
        //   { convertPathData: false },
        //   { convertShapeToPath: false },
        //   { mergePaths: false },
        //   { removeViewBox: false },
        //   { cleanupIDs: false },
        // ],
      },
    },
  ],
};
