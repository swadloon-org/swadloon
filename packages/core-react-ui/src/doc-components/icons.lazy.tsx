import { lazy } from 'react';

export const IconsLazy = lazy(() =>
  import('./icons').then((module) => ({ default: module.Icons }))
);
