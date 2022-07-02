import { svgoConfig } from './svgo.conf.js';

/**
 * @see https://react-svgr.com/docs/options/
 */
export const svgrConfig = {
  native: false,
  ref: true,
  svgoConfig,
};
