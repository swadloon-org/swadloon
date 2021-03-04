import { getNavigationFromPageNodes, Navigation } from '@newrade/core-gatsby-ui/src';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(filter: { path: { glob: "**/design-system/{**,*}" } }) {
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

export function useDesignSystemNavigation(): Navigation {
  const data = useStaticQuery(query);

  return getNavigationFromPageNodes({
    name: 'design system navigation',
    pageNodes: data.pages.nodes,
    sortOrderDirectories: ['home', 'typography', 'colors', 'foundations', 'components', 'content', 'effects', 'motion'],
    sortOrderItems: [
      '',
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
