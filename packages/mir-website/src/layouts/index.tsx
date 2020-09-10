import React from 'react';
import { TreatProvider } from 'react-treat';
import { HelmetProvider } from 'react-helmet-async';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';

export const Layout: React.FC<{}> = (props) => {
  // const data = useStaticQuery(query);

  return (
    <HelmetProvider>
      <ViewportProvider context={viewportContext}>
        <TreatProvider theme={light}>{props.children}</TreatProvider>
      </ViewportProvider>
    </HelmetProvider>
  );
};

export default Layout;
