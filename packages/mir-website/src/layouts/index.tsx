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
        <Helmet></Helmet>
        {props.children}
      </TreatProvider>
    </ViewportProvider>
  );
};

export default Layout;
