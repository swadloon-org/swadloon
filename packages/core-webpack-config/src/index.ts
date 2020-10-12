import { isWebpackDevServer } from './utilities';

/**
 * Babel configuration
 */
export * from './babel-env-preset.conf';
export * from './babel-plugins.conf';
/**
 * Preconfigured output configuration
 */
export * from './loaders/css-loader';
export * from './loaders/ejs-loader';
/**
 * Preconfigured loaders
 */
export * from './loaders/extract-css.loader';
export * from './loaders/scss-loader';
export * from './output.conf';
/**
 * Preconfigured plugins
 */
export * from './plugins/bundle-visualizer-plugin';
export * from './plugins/treat-css-plugin';
/**
 * Dev server
 */
export * from './source-map.conf';
/**
 * Other webpack configs
 */
export * from './stats.conf';

/**
 * Other utilities
 */
export const utilities = {
  isWebpackDevServer,
};
