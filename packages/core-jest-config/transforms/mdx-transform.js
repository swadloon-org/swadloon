const mdx = require('@mdx-js/mdx');
const babel = require('babel-core');

const presets = require('./babel-transform').presets;
const plugins = require('./babel-transform').plugins;

module.exports = {
  process(src, filename) {
    let rawMDX = src;
    // Convert .MDX file into JSX
    const result = mdx.sync(rawMDX);

    // Inject React and MDXTag imports
    var injectedJSX = `
        import React from 'react';
        import { MDXTag } from '@mdx-js/tag';
        ${result}
        `;

    // Transform ES6 with babel
    const babelResult = babel.transform(injectedJSx, {
      presets,
      plugins,
    }).code;

    return babelResult;
  },
};
