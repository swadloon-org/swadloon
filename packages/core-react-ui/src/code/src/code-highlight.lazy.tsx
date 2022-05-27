import { lazy } from 'react';

export const CodeHighlightLazy = lazy(() =>
  import('./code-highlight').then((module) => ({ default: module.CodeHighlight }))
);
