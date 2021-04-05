import loadable from '@loadable/component';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';
import { LayoutDocsProps } from './docs.layout';

const query = graphql`
  query DocsLayout {
    pages: allSitePage(filter: { path: { glob: "**/docs/{**,*}" } }) {
      totalCount
      nodes {
        id
        path
        context {
          siteMetadata {
            description
            languages {
              defaultLangKey
              langs
            }
            siteEnv
            siteUrl
            title
          }
          id
          name
          locale
          layout
          template
        }
      }
    }
  }
`;

export const LazyLayoutDocsComp = loadable<LayoutDocsProps>(
  // @ts-ignore
  () => {
    return import('./docs.layout');
  },
  {
    resolveComponent: (components: typeof import('./docs.layout')) => components.LayoutDocs,
  }
);

export const LazyLayoutDocs: React.FC<LayoutDocsProps> = (props) => {
  /**
   * Retrieve all docs pages outside of the lazy loaded component
   */
  const data = useStaticQuery(query);
  const pageNodes = data.pages.nodes;
  const navigation = getNavigationFromPageNodes({
    name: 'docs navigation',
    pageNodes: pageNodes,
    sortOrderDirectories: ['home', 'developer guide', 'tools', 'hr'],
  });

  return <LazyLayoutDocsComp navigation={navigation} {...props} />;
};
