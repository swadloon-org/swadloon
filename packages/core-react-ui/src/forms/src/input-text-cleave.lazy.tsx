import { lazy } from 'react';

export const InputTextCleaveLazy = lazy(() =>
  import('./input-text-cleave').then((module) => ({ default: module.InputTextCleave }))
);
