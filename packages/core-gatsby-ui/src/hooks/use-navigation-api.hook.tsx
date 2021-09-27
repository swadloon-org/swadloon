import { NavigationAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { GatsbyPageNode } from '..';
import { useI18next } from '../i18next/use-i18next.hook';
import {
  getNavigationAPIFromPageNodes,
  GetNavigationAPIOptions,
} from '../utilities/navigation-api.utilities';

type NavigationQuery = PartialOrNull<{
  pages: {
    nodes: GatsbyPageNode[];
    totalCount: number;
  };
}>;

const query = graphql`
  query Navigation {
    pages: allSitePage(filter: { path: { glob: "!**/dev-404-page/{**,*}" } }) {
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
          frontmatter {
            title
            subject
            tags
            description
            version
            published
            status
            deprecated
            editPageUrl
            nextPageLabel
            nextPageUrl
            componentStatus
            componentVersion
            componentTests
          }
        }
      }
    }
  }
`;

/**
 * Returns a NavigationAPI object based on current Gatsby SitePages
 *
 * This hooks has support for i18n translation and localization and must be used within a I18nextContext Context
 */
export function useNavigationAPI(options: GetNavigationAPIOptions): NavigationAPI {
  const data = useStaticQuery<NavigationQuery>(query);
  const { t } = useI18next();

  return useMemo(() => {
    const mergedOptions: GetNavigationAPIOptions = {
      ...options,
      pageNodes: data?.pages?.nodes as GatsbyPageNode[],
    };
    return getNavigationAPIFromPageNodes(mergedOptions);
  }, [options, data?.pages?.nodes]);
}
