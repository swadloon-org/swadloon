import { LinkAPI, LinkComponent, LinkType, NavigationAPI } from '@newrade/core-website-api';
import { PartialOrNull } from '@newrade/core-website-api/src/utilities';
import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { GatsbyPageNode } from '..';
import { useI18next } from '../i18next/use-i18next.hook';
import {
  getNavigationAPIFromPageNodes,
  GetNavigationAPIOptions,
  getPathParts,
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
  const { translate, getTranslatedObject, language } = useI18next();
  const memoTranslate = useMemo(() => translate, [translate]);

  return useMemo(() => {
    const mergedOptions: GetNavigationAPIOptions = {
      pageNodes: data?.pages?.nodes as GatsbyPageNode[],
      translate: memoTranslate,
      ...options,
    };
    return getNavigationAPIFromPageNodes(mergedOptions);
  }, [options, memoTranslate, data?.pages?.nodes]);
}

/**
 * Convert navigation object to links (which implies that each navigation path has a matching page)
 */
export function getLinksFromTopSubNavigation(
  navigations?: PartialOrNull<NavigationAPI[]> | null
): LinkAPI[] {
  return navigations
    ? navigations
        .filter((navigation) => !!navigation)
        .map((navigation) => {
          const nav = navigation as NavigationAPI;
          return {
            name: nav.name,
            label: nav.label,
            type: LinkType.internalPage,
            component: LinkComponent.link,
            page: {
              name: nav.name,
              slug: nav.path,
            },
          };
        })
    : [];
}

/**
 * Get a specific navigation based on starting path
 */
export function getSubNavigationForPath({
  path,
  navigations,
}: {
  path: string;
  navigations?: PartialOrNull<NavigationAPI[]> | null;
}): NavigationAPI | undefined | null {
  const pageNodePathParts = getPathParts({ path });

  if (!pageNodePathParts.length) {
    return undefined;
  }

  return navigations
    ? navigations.find((navigation) =>
        navigation?.path
          ? // try to find the first part of the path in passed navigation
            new RegExp(`^${navigation?.path}`, 'i').test(path)
          : false
      )
    : undefined;
}
