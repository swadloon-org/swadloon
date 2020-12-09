import { useStaticQuery, graphql } from 'gatsby';

/** @type {() => import('types/graphql-types').LayoutAllSitePageQuery */
export const useAllSitePages = () => {
  return useStaticQuery(
    graphql`
      query LayoutAllSitePage {
        pages: allSitePage(filter: { path: { glob: "!/docs/**/*" } }) {
          nodes {
            id
            path
          }
        }
        docs: allSitePage(filter: { path: { glob: "/docs/**/*" } }) {
          nodes {
            id
            path
          }
        }
      }
    `
  );
};
