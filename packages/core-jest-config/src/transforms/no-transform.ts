import { SyncTransformer } from '@jest/transform';

/**
 * @see https://jestjs.io/docs/code-transformation
 */
const transformer: SyncTransformer = {
  process(src, filename) {
    return src;
  },
};

export default transformer;
