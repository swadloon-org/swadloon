import React from 'react';

import { viewportContext, ViewportProvider } from '@newrade/core-react-ui';

export const Providers: React.FC = (props) => {
  return <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>;
};
