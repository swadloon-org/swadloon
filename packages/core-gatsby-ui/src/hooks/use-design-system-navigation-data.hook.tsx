import { SITE_LANGUAGES } from '@newrade/core-common';
import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../api/navigation.model';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(
      filter: { path: { glob: "/design-system/{**,*}" } }
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

export function useDesignSystemNavigation({ locales }: { locales: SITE_LANGUAGES[] }): Navigation {
  const data = useStaticQuery(query);

  return getNavigationFromPageNodes({
    name: 'design system navigation',
    locales,
    pageNodes: data.pages.nodes,
    sortOrderDirectories: [
      'design-system',
      'home',
      'foundations',
      'components',
      'content',
      'effects',
      'motion',
      'examples',
    ],
    sortOrderItems: [
      '',
      'overview',
      'index',
      'typography',
      'colors',
      'color-intents',
      'sizing',
      'pages',
      'sections',
      'blocks',
      'layout-components',
    ],
  });
}
