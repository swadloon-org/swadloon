import { defaultOuputConf } from './output.conf';
import { webpackStatsConf } from './stats.conf';
import { sourceMaps } from './source-map.conf';
import { isWebpackDevServer } from './utilities';

/**
 * Preconfigured output configuration
 */
export { defaultOuputConf };

/**
 * Preconfigured loaders
 */
export { cssLoader } from './loaders/css-loader';
export { ejsLoader } from './loaders/ejs-loader';
export { scssLoader } from './loaders/scss-loader';

/**
 * Preconfigured plugins
 */
export { bundleVisualizerPlugin } from './plugins/bundle-visualizer-plugin';

/**
 * Other webpack configs
 */
export { webpackStatsConf };

/**
 * Dev server
 */
export { sourceMaps };

/**
 * Other utilities
 */
export const utilities = {
  isWebpackDevServer,
};
