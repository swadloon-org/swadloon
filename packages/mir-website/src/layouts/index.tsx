import React from 'react';
import { Helmet } from 'react-helmet';
import { TreatProvider } from 'react-treat';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { useStaticQuery, graphql } from 'gatsby';

export const query = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

export const Layout: React.FC<{}> = (props) => {
  const data = useStaticQuery(query);

  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="description" content="Helmet application" />
          <title>MIR - Recrutement technique</title>
        </Helmet>
        {props.children}
      </TreatProvider>
    </ViewportProvider>
  );
};

export default Layout;
