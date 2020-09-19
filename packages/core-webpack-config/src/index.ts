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
export * from './loaders/extract-css.loader';
export { cssLoader } from './loaders/css-loader';
export { ejsLoader } from './loaders/ejs-loader';
export { scssLoader } from './loaders/scss-loader';

/**
 * Preconfigured plugins
 */
export * from './plugins/bundle-visualizer-plugin';
export * from './plugins/treat-css-plugin';

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
