import { getNavigationFromPageNodes, Navigation, PageNode } from '@newrade/core-gatsby-ui/src';
import { graphql, useStaticQuery } from 'gatsby';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';

const query = graphql`
  query LayoutAllSitePage {
    pages: allSitePage(filter: { path: { glob: "!/{docs,design-system}/{**,*}" } }) {
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
    companyAddress: contentfulCompanyAddress {
      addressLine1
      city
      provinceState
      postalCode
      websiteURL
      phone
      email
    }
    companyInfo: contentfulCompanyInfo {
      copyright
    }
  }
`;

export function useQuery() {
  return useStaticQuery<LayoutAllSitePageQuery>(query);
}

export function useNavigation(): Navigation {
  const data = useQuery();

  return getNavigationFromPageNodes({
    name: 'newrade sidenav',
    pageNodes: data?.pages.nodes as PageNode[],
  });
}

export function useCompanyInfo() {
  const data = useQuery();
  return { companyInfo: data.companyInfo, companyAddress: data.companyAddress };
}
