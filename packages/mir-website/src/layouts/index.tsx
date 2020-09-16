import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { TreatProvider } from 'react-treat';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';

export const Layout: React.FC<{}> = (props) => {
  return (
    <HelmetProvider>
      <ViewportProvider context={viewportContext}>
        <TreatProvider theme={light}>{props.children}</TreatProvider>
      </ViewportProvider>
    </HelmetProvider>
  );
};

export default Layout;
