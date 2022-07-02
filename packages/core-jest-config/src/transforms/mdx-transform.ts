import babel from '@babel/core';
// @ts-ignore
import mdx from '@mdx-js/mdx';

import babelConfig from './babel-test.config.js';

const presets = babelConfig.presets;
const plugins = ['@babel/plugin-transform-react-jsx', '@babel/plugin-syntax-dynamic-import'];

import { SyncTransformer } from '@jest/transform';

/**
 * @see https://jestjs.io/docs/code-transformation
 */
const transformer: SyncTransformer = {
  process(src, filename) {
    let rawMDX = src;
    // Convert .MDX file into JSX
    const result = mdx.sync(rawMDX);

    // Inject React and MDXTag imports
    var injectedJSX = `
        import {mdx} from '@mdx-js/react';
        ${result}
        `;

    // Transform ES6 with babel
    const babelResult = babel.transform(injectedJSX, {
      presets,
      plugins,
    });

    if (!babelResult) {
      throw new Error('mdx transform failed');
    }

    if (!babelResult.code) {
      throw new Error('mdx transform failed');
    }

    return {
      code: babelResult.code as string,
    };
  },
};

export default transformer;
