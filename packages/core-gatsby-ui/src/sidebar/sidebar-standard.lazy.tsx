import { lazy } from 'react';

export const SidebarStandardLazy = lazy(() =>
  import('./sidebar-standard').then((module) => ({ default: module.SidebarStandard }))
);
