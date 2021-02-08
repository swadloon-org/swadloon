import { Navigation } from '@newrade/core-gatsby-ui';
import { getNavigationFromPageNodes, PageNode } from '@newrade/core-gatsby-ui/src';
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
      addressLine2
      city
      provinceState
      postalCode
      websiteURL
      phone
      email
      fax
    }
    companyInfo: contentfulCompanyInfo {
      copyright
    }
  }
`;

export function useQuery() {
  return useStaticQuery<LayoutAllSitePageQuery>(query);
}

export function usePagesNavigation(): Navigation {
  const data = useQuery();

  return getNavigationFromPageNodes({
    name: 'VSB sidenav',
    pageNodes: data?.pages.nodes as PageNode[],
    sortOrderDirectories: ['services', 'la clinique', 'nous joindre'],
    sortOrderItems: ['tout sur la vasectomie', 'formulaire vasectomie', 'examen pour transport canada'],
    ignoredItems: ['address', 'accueil'],
  });
}

export function useCompanyInfo() {
  const data = useQuery();
  return { companyInfo: data.companyInfo, companyAddress: data.companyAddress };
}
