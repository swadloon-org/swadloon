import path from 'path';

import { SyncTransformer } from '@jest/transform';

/**
 * @see https://jestjs.io/docs/code-transformation
 */
const transformer: SyncTransformer = {
  process(src: string, filename: string) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};

export default transformer;
