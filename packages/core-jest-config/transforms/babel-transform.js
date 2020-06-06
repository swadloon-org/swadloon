const babelJest = require('babel-jest');

const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
  '@babel/preset-react',
];
const plugins = [
  '@babel/plugin-transform-react-jsx',
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = babelJest.createTransformer({
  presets,
  plugins,
});

module.exports.presets = presets;
module.exports.plugins = plugins;
