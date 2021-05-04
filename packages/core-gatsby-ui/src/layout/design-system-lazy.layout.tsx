import loadable from '@loadable/component';
import { DesignSystemLayoutProps } from './design-system.layout';

export const LazyLayoutDesignSystem = loadable<DesignSystemLayoutProps>(
  // @ts-ignore
  () => {
    return import('./design-system.layout');
  },
  {
    resolveComponent: (components: typeof import('./design-system.layout')) =>
      components.LayoutDesignSystem,
  }
);
