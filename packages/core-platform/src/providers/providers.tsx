import React from 'react';

// @ts-ignore
import { viewportContext, ViewportProvider } from '@newrade/core-react-ui/lib';

export const Providers: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>;
};
