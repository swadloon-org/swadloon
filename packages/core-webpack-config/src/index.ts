import ejsLoader from './custom-loaders/ejs-loader';
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
export const loaders = {
  ejsLoader,
};

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
