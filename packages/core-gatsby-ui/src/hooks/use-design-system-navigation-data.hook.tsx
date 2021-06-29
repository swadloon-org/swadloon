import { SITE_LANGUAGES } from '@newrade/core-common';
import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../navigation/navigation.model';
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
      'brand',
      'templates',
      'components',
      'data-visualization',
      'animations',
      'guidelines',
      'print',
      'tokens',
      'content-api',
    ],
    sortOrderItems: [
      '',
      'overview',
      'index',
      'fonts',
      'typography',
      'colors',
      'color-intents',
      'sizing',
      'layout-components',
      'blocks',
      'sections',
      'pages',
    ],
  });
}
