import { GatsbyNode } from 'gatsby';

import { createPagesFunction } from './src/create-pages.js';

export const createPages: GatsbyNode['createPages'] = createPagesFunction;
