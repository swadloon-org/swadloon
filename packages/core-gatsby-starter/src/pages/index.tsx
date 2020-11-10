import { Stack, Button, ResetCSS } from '@newrade/core-react-ui';
import React from 'react';
import { TreatProvider } from 'react-treat';
import { light } from '../design-system/theme.treat';
import { graphql, PageProps, Link } from 'gatsby';
import { PagesQuery } from '../../types/graphql-types';
import { GatsbyPageContext } from '@newrade/core-gatsby-config';

export type ProjectPageProps = PageProps<PagesQuery, GatsbyPageContext>;

export const query = graphql`
  query Pages {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

const IndexPage: React.FC<ProjectPageProps> = (props) => {
  return <Index {...props} />;
};

export const Index: React.FC<ProjectPageProps> = (props) => {
  return (
    <TreatProvider theme={light}>
      <ResetCSS>
        <div>
          <ul>
            {props.data.allSitePage.nodes
              .map((node) => node.path)
              .map((path, index) => {
                return (
                  <li key={index}>
                    <Link to={path}>{path}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <Stack gap={'20px'} padding={'20px'}>
          <Stack gap={'20px'} padding={'20px'}>
            <div>hello</div>
          </Stack>

          <Stack gap={'13px'} padding={'20px'}>
            <h1>Buttons</h1>
            <Button>Button</Button>
          </Stack>
        </Stack>
      </ResetCSS>
    </TreatProvider>
  );
};

export default IndexPage;
