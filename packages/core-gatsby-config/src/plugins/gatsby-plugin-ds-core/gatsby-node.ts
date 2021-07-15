import { GatsbyNode } from 'gatsby';
import { createPagesFunction, onCreatePageFunction } from './src/create-pages';

export const createPages: GatsbyNode['createPages'] = createPagesFunction;
export const onCreatePage: GatsbyNode['onCreatePage'] = onCreatePageFunction;
