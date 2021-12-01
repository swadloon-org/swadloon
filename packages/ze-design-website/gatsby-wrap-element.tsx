// import '@newrade/ze-design-system/src/assets/fonts/inter-webfonts/stylesheet.css';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { GatsbyCommonPageContext } from '@newrade/core-gatsb-config/config';
import {
  getLinksFromTopSubNavigation,
  getSubNavigationForPath,
  useI18next,
  useNavigationAPI,
} from '@newrade/core-gatsby-ui/src';
import { WrapElementWithi18N } from '@newrade/core-gatsby-ui/src/i18next/wrap-element-i18n';
import { LayoutDocs } from '@newrade/core-gatsby-ui/src/layout/docs.layout';
import {
  FooterAPI,
  FooterLayout,
  NavbarAPI,
  NavbarLayout,
  NavComponent,
  SidebarAPI,
  SidebarLayout,
} from '@newrade/core-website-api';

import { companyInfo } from './src/data/company-info';
import { cssTheme, light, theme } from './src/design-system/theme.treat';
import { locales } from './src/i18n/locales';
import { Layout } from './src/layout/layout';
import { ProvidersDocs } from './src/providers/providers-docs';
import { ProvidersSite } from './src/providers/providers-site';

import { cssThemeConfig } from './src/design-system/theme.css';

type Props = PageProps<{}, GatsbyCommonPageContext>;

/**
 * Component for Gatsby's 'wrapPageElement'
 */
export const WrapElement: React.FC<WrapPageElementBrowserArgs> = (props) => {
  /**
   * Translation
   */

  const i18nOptions = {
    fallbackLng: 'en',
    resources: locales,
  };

  return (
    <WrapElementWithi18N props={props.props} i18nOptions={i18nOptions}>
      <WrapElementI18n {...props} />
    </WrapElementWithi18N>
  );
};

/**
 * Component for Gatsby's 'wrapPageElement' with i18n context
 */
const WrapElementI18nFn: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  /**
   * Translation
   */

  const { language } = useI18next();

  /**
   * Navigation
   */

  const pagePathname = pageProps.path;
  const version = `v${pageProps.pageContext.siteMetadata?.siteVersion}`;

  const navigation = useNavigationAPI({
    navigationName: 'Website',
    navigationComponent: NavComponent.navbar,
    locale: language,
  });

  const navbar: NavbarAPI = {
    name: 'Navbar',
    variant: Variant.primaryReversed,
    layout: NavbarLayout.standard,
    navigation: {
      component: NavComponent.navbar,
      links: getLinksFromTopSubNavigation(navigation.subNavigation),
    },
  };

  const sidebarNavigationForCurrentpage = getSubNavigationForPath({
    path: pagePathname,
    navigations: navigation.subNavigation,
  });

  const sidebarDocs: SidebarAPI = {
    name: 'Sidebar docs',
    layout: SidebarLayout.docs,
    navigation: {
      ...sidebarNavigationForCurrentpage,
      component: NavComponent.sidebar,
    },
    version,
  };

  const sidebar: SidebarAPI = {
    name: 'Sidebar website',
    layout: SidebarLayout.standard,
    navigation: {
      ...navigation,
      component: NavComponent.sidebar,
    },
    version,
    companyInfo,
  };

  const footer: FooterAPI = {
    ...navbar,
    name: 'Footer',
    layout: FooterLayout.docs,
    navigation: {
      ...navigation,
      component: NavComponent.footer,
    },
    version,
    companyInfo,
  };

  switch (pageProps.pageContext.layout) {
    case 'designSystem':
    case 'docs': {
      return (
        <ProvidersDocs>
          <LayoutDocs
            {...pageProps}
            companyInfo={companyInfo}
            navbar={navbar}
            sidebar={sidebarDocs}
            footer={footer}
            themeConfig={cssThemeConfig}
            treatThemeRef={light}
            theme={{ theme, cssTheme }}
          >
            {element}
          </LayoutDocs>
        </ProvidersDocs>
      );
    }
    case 'default':
    default: {
      return (
        <ProvidersSite>
          <Layout
            {...pageProps}
            companyInfo={companyInfo}
            navbar={navbar}
            footer={footer}
            themeConfig={cssThemeConfig}
          >
            {element}
          </Layout>
        </ProvidersSite>
      );
    }
  }
};

WrapElementI18nFn.displayName = 'WrapElementI18n';

export const WrapElementI18n = WrapElementI18nFn;
