import React from 'react';
import { TreatProvider } from 'react-treat';
import { ViewportProvider } from '../context/viewport.context';
import { viewportContext } from '../hooks/use-viewport.hook';
import { light } from '../design-system/themes.treat';

export const Root: React.FC<{}> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>{props.children}</TreatProvider>
    </ViewportProvider>
  );
};
