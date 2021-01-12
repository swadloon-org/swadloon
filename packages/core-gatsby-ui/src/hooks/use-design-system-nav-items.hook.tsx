import { title } from 'case';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query DesignSystemLayoutPage1 {
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

export function useDesignSystemNavItems(): { name: string; dirName: string; path: string }[] {
  const data = useStaticQuery(query);

  // @ts-ignore
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
