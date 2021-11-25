import { GatsbyNode } from 'gatsby';

import { createPagesFunction } from './src/create-pages';

export const createPages: GatsbyNode['createPages'] = createPagesFunction;
