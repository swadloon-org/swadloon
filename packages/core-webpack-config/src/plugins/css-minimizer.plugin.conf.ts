import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import {
  BasePluginOptions,
  CssNanoOptionsExtended,
  DefinedDefaultMinimizerAndOptions,
} from 'css-minimizer-webpack-plugin/types/index';
import { WebpackPluginInstance } from 'webpack';

import { cssNanoConfig } from '../loaders/css-nano.config';

type CssMinimizerPluginOptions =
  | (BasePluginOptions & DefinedDefaultMinimizerAndOptions<CssNanoOptionsExtended>)
  | undefined;

const defautOptions: CssMinimizerPluginOptions = {
  minimizerOptions: cssNanoConfig,
};

/**
 * Return a CssMinimizerPlugin plugin instance
 *
 * @see https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
 */
export const getCSSMinimizerPlugin: (options?: CssMinimizerPluginOptions) => WebpackPluginInstance =
  (options) => {
    const validatedOptions: CssMinimizerPluginOptions = options ? options : defautOptions;

    return new CssMinimizerPlugin(validatedOptions);
  };
