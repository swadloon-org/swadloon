import { title, kebab } from 'case';
import { graphql, useStaticQuery } from 'gatsby';
import { NavItem } from '../models/nav-item.model';

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(
      filter: { path: { glob: "/design-system/{**,*}" } }
      sort: { fields: context___name, order: DESC }
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
          dirName
          locale
          layout
        }
      }
    }
  }
`;

export function useDesignSystemNavItems(): NavItem[] {
  const data = useStaticQuery(query);
  const dirSortOrder = ['docs', 'foundations', 'components', 'effects'];

  const navItems: NavItem[] = data?.pages.nodes.map((node: any) => ({
    name: formatName(node.context?.name),
    dirName: node.context?.dirName,
    path: node.path,
  }));
  const sortedNavItems = navItems.sort((itemA, itemB) => {
    const indexA = dirSortOrder.indexOf(kebab(itemA.dirName));
    const indexB = dirSortOrder.indexOf(kebab(itemB.dirName));

    return indexA > indexB ? 1 : -1;
  });

  function formatName(name?: string | null): string {
    if (!name) {
      return '';
    }
    return title(name?.replace('.page', '').replace('design-system-', ''));
  }

  return sortedNavItems;
}
