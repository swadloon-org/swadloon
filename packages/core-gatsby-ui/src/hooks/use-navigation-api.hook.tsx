import { NavComponent, NavigationAPI } from '@newrade/core-website-api';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from '../i18next/use-i18next.hook';
import {
  getNavigationAPIFromPageNodes,
  GetNavigationAPIOptions,
} from '../utilities/navigation-api.utilities';

const query = graphql`
  query Navigation {
    pages: allSitePage {
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
  const data = useStaticQuery(query);
  const { t } = useI18next();

  if (!options.pageNodes?.length) {
    return {
      id: options.navigationName,
      name: options.navigationName,
      label: '',
      component: NavComponent.sidebar,
      links: [],
      subNavigation: [],
    };
  }

  return getNavigationAPIFromPageNodes(options);
}
