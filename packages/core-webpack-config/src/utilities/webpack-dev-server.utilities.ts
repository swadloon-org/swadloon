/**
 * returns if webpack-dev-server is running
 *
 * @see https://github.com/webpack/webpack-dev-server/pull/1929/files
 */
export function isWebpackDevServer() {
  return process.env.WEBPACK_DEV_SERVER === 'true' ? true : false;
}

export function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}
