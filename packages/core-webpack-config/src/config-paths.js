const path = require('path');

module.exports = {
  // global
  nodeModules: path.resolve(__dirname, '../node_modules'),
  // dist
  dist: path.resolve(__dirname, '../dist'),
  // src
  srcDir: path.resolve(__dirname, '../src/'),
  // other packages
  uiLibSrcFiles: path.resolve(__dirname, '../../core-ui-lib/src'),
  // client
  clientPolyfills: path.resolve(__dirname, '../src/app/polyfills'),
  clientDir: path.resolve(__dirname, '../src/'),
  client: path.resolve(__dirname, '../src/index.tsx'),
  clientIndex: path.resolve(__dirname, '../src/index.ejs'),
  clientShell: path.resolve(__dirname, '../src/index-shell.tsx'),
  clientIndexShell: path.resolve(__dirname, '../src/index-shell.ejs'),
  clientApp: path.resolve(__dirname, '../src/app'),
  clientAppEntry: path.resolve(__dirname, '../src/app/app.tsx'),
  clientAppIndex: path.resolve(__dirname, '../src/app/app.html'),
  clientTsConfig: path.resolve(__dirname, '../tsconfig.json'),
  // ui / style guide
  uiDir: path.resolve(__dirname, '../src/ui'),
  // docs generator
  docsGeneratorDir: path.resolve(__dirname, '../src/docs-generator'),
};
