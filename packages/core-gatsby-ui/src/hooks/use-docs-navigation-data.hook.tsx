import { SITE_LANGUAGES } from '@newrade/core-common';
import { SOURCE_INSTANCE_NAME } from '@newrade/core-gatsby-config/lib/esm/config/gatsby-source-instances';
import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../navigation/navigation.model';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';

const query = graphql`
  query DocsPages {
    pages: allSitePage(
      filter: { path: { glob: "/docs/{**,*}" } }
      sort: { fields: context___name, order: ASC }
    ) {
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
    coreDocsPages: allSitePage(
      filter: { path: { glob: "/core-docs/{**,*}" } }
      sort: { fields: context___name, order: ASC }
    ) {
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

export function useDocsNavigation(
  {
    locales,
    source = SOURCE_INSTANCE_NAME.DOCS,
  }: {
    locales: SITE_LANGUAGES[];
    source?: SOURCE_INSTANCE_NAME;
  } = { locales: [SITE_LANGUAGES.EN, SITE_LANGUAGES.EN_CA], source: SOURCE_INSTANCE_NAME.DOCS }
): Navigation {
  /**
   * Retrieve all docs pages for the package /docs/ and /core-docs/ if present
   */
  const data = useStaticQuery(query);
  const pageNodes = data?.pages?.nodes;
  const coreDocsPagesNodes = data?.coreDocsPages?.nodes;

  if (source === SOURCE_INSTANCE_NAME.DOCS) {
    return getNavigationFromPageNodes({
      name: 'docs navigation',
      locales,
      pageNodes: pageNodes,
      sortOrderDirectories: ['docs', 'home', 'developer guide', 'tools', 'hr'],
      sortOrderItems: ['', 'overview', 'index'],
    });
  }

  return getNavigationFromPageNodes({
    name: 'core packages docs navigation',
    locales,
    pageNodes: coreDocsPagesNodes,
    sortOrderDirectories: ['docs', 'home', 'guides', 'design', 'build', 'deploy', 'monitor'],
    sortOrderItems: ['', 'overview', 'index'],
  });
}
