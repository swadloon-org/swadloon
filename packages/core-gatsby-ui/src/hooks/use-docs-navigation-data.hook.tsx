import { graphql, useStaticQuery } from 'gatsby';

import { SITE_LANGUAGES } from '@newrade/core-common';
import { SOURCE_INSTANCE_NAME } from '@newrade/core-gatsb-config/config';

import { Navigation } from '../navigation/navigation.model.js';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities.js';

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
          frontmatter {
            title
            subject
            tags
            description
            version
            published
            status
            deprecated
            editPageUrl
            nextPageLabel
            nextPageUrl
            componentStatus
            componentVersion
            componentTests
          }
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
          frontmatter {
            title
            subject
            tags
            description
            version
            published
            status
            deprecated
            editPageUrl
            nextPageLabel
            nextPageUrl
            componentStatus
            componentVersion
            componentTests
          }
        }
      }
    }
  }
`;

/**
 * @deprecated please use useNavigationAPI
 */
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
    sortOrderDirectories: [
      'docs',
      'home',
      'guides',
      'design',
      'build',
      'deploy',
      'monitor',
      'packages',
    ],
    sortOrderItems: [
      '',
      'overview',
      'index',
      'get-started',
      'development-process',
      'tech',
      'architecture',
      'monorepo-manual',
    ],
  });
}
