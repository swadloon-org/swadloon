import { useStaticQuery, graphql } from 'gatsby';

/** @type {() => import('types/graphql-types').LayoutAllSitePageQuery */
export const useAllSitePages = () => {
  return useStaticQuery(
    graphql`
      query LayoutAllSitePage {
        pages: allSitePage(filter: { path: { glob: "!/{docs,design-system}/{**,*}" } }) {
          totalCount
          nodes {
            ...SitePageFragment
          }
        }
        designsystem: allSitePage(filter: { path: { glob: "/design-system/{**,*}" } }) {
          totalCount
          nodes {
            ...SitePageFragment
          }
          totalCount
        }
        docs: allSitePage(filter: { path: { glob: "/docs/{**,*}" } }) {
          totalCount
          nodes {
            ...SitePageFragment
          }
        }
      }

      fragment SitePageFragment on SitePage {
        id
        path
        context {
          slug
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
          frontmatter {
            name
            tags
          }
        }
      }
    `
  );
};
