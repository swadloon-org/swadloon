import { useStaticQuery, graphql } from 'gatsby';
import { DesignSystemLayoutPageQuery } from '../../types/graphql-types';
import { title } from 'case';

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(filter: { path: { glob: "/design-system/{**,*}" } }) {
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
        }
      }
    }
  }
`;

export function useDesignSystemNavItems() {
  const data = useStaticQuery<DesignSystemLayoutPageQuery>(query);

  const navItems = data?.pages.nodes.map((node) => ({
    name: formatName(node.context?.name),
    path: node.path,
  }));

  function formatName(name?: string | null): string {
    if (!name) {
      return '';
    }
    return title(name?.replace('.page', '').replace('design-system-', ''));
  }

  return navItems;
}
