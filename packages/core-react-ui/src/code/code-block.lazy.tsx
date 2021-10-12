import { lazy } from 'react';

export const CodeBlockLazy = lazy(() =>
  import('./code-block').then((module) => ({ default: module.CodeBlock }))
);
