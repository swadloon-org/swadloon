import { MDXProvider } from '@mdx-js/react';
import { DefaultCSS, mdxComponents, ResetCSS } from '@newrade/core-react-ui';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';

type Props = {};

export const query = graphql`
  {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

export const Layout: React.FC<Props> = (props) => {
  const data = useStaticQuery(query);

  return (
    <TreatProvider theme={light}>
      <MDXProvider components={mdxComponents}>
        <ResetCSS>
          <DefaultCSS>
            <nav>
              {data.allSitePage.nodes
                .map((node) => node.path)
                .map((path, index) => {
                  return (
                    <li key={index}>
                      <Link to={path}>{path}</Link>
                    </li>
                  );
                })}
            </nav>

            <div>{props.children}</div>
          </DefaultCSS>
        </ResetCSS>
      </MDXProvider>
    </TreatProvider>
  );
};

export default Layout;
