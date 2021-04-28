import loadable from '@loadable/component';
import { LayoutDocsProps } from './docs.layout';

export const LazyLayoutDocs = loadable<LayoutDocsProps>(
  // @ts-ignore
  () => {
    return import('./docs.layout');
  },
  {
    resolveComponent: (components: typeof import('./docs.layout')) => components.LayoutDocs,
  }
);
