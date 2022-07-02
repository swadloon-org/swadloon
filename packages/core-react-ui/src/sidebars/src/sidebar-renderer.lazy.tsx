import { lazy } from 'react';

export const SidebarRendererLazy = lazy(() =>
  import('./sidebar-renderer').then((module) => ({ default: module.SidebarRenderer }))
);
