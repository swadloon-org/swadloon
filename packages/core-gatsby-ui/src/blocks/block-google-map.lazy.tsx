import { lazy } from 'react';

export const BlockGoogleMapLazy = lazy(() =>
  import('./block-google-map').then((module) => ({ default: module.BlockGoogleMap }))
);
