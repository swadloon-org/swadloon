import { viewportContext, ViewportProvider } from '@newrade/core-react-ui/src';
import React from 'react';

export const Providers: React.FC = (props) => {
  return <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>;
};
