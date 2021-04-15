import { SITE_LANGUAGES } from '@newrade/core-common';
import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../api/navigation.model';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';

const query = graphql`
  query DocsLayout {
    pages: allSitePage(filter: { path: { glob: "/docs/{**,*}" } }) {
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

export function useDocsNavigation({ locales }: { locales: SITE_LANGUAGES[] }): Navigation {
  /**
   * Retrieve all docs pages
   */
  const data = useStaticQuery(query);
  const pageNodes = data.pages.nodes;

  return getNavigationFromPageNodes({
    name: 'docs navigation',
    locales,
    pageNodes: pageNodes,
    sortOrderDirectories: ['docs', 'home', 'developer guide', 'tools', 'hr'],
  });
}
