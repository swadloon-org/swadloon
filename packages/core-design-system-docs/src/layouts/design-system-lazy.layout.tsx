import loadable from '@loadable/component';
import { DesignSystemLayoutProps } from './design-system.layout';

export const LazyLayoutDesignSystem = loadable<DesignSystemLayoutProps>(() => {
  return import('./design-system.layout').then((comp) => ({ default: comp.LayoutDesignSystem }));
});
