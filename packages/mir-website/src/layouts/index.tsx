import React from 'react';
import { TreatProvider } from 'react-treat';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';

export const Layout: React.FC<{}> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>{props.children}</TreatProvider>
    </ViewportProvider>
  );
};

export default Layout;
