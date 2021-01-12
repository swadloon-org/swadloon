import { useStaticQuery, graphql } from 'gatsby';
import { DesignSystemLayoutPageQuery } from '../../types/graphql-types';
import { title, kebab } from 'case';

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
          dirName
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
    dirName: node.context?.dirName,
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
