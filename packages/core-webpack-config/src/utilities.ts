export function isWebpackDevServer() {
  return process.argv[1] && !!/webpack-dev-server/.exec(process.argv[1]);
}

export function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}
