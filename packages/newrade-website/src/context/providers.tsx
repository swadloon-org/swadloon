import { viewportContext, ViewportProvider } from '@newrade/core-react-ui';
import React from 'react';

export const Providers: React.FC = (props) => {
  return <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>;
};

export default Providers;
