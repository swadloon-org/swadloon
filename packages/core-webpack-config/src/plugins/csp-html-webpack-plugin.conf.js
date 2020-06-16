const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
  dev: new CspHtmlWebpackPlugin(
    {
      // 'base-uri': "'self'",
      // 'default-src': "'self' https://0.0.0.0:9000",
      // 'form-action': "'self'",
      // 'manifest-src': "'self'",
      // 'connect-src': "wss: ws: 'self' 127.0.0.1:9000 http://localhost:5984",
      // 'object-src': "'none'",
      // 'script-src': "data: 'self' 'unsafe-eval' https://0.0.0.0:9000",
      // 'media-src': "'self'",
      // 'font-src': "'self'",
      // 'img-src': [
      //   "'self'",
      //   'https://0.0.0.0:9000',
      //   'https://circleci.com/gh/noveo-io/',
      //   'https://user-images.githubusercontent.com',
      //   'https://img.shields.io'
      // ],
      // 'style-src': ["'self'", "'unsafe-inline'", 'https://0.0.0.0:9000', 'blob:']
    },
    {
      hashingMethod: 'sha256',
      enabled: true,
    }
  ),
  prod: new CspHtmlWebpackPlugin(
    {
      'base-uri': "'self'",
      'default-src': "'none'",
      'form-action': "'self'",
      'manifest-src': "'self'",
      'connect-src': ["'self'"],
      'object-src': "'none'",
      'script-src': ["'self'"],
      'media-src': "'self'",
      'font-src': "'self'",
      'img-src': [
        "'self'",
        'https://circleci.com/gh/noveo-io/',
        'https://user-images.githubusercontent.com',
        'https://img.shields.io',
      ],
      'style-src': ["'self'"],
    },
    {
      hashingMethod: 'sha256',
      enabled: true,
    }
  ),
};
