import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';

import { COLOR_SCHEME, Variant } from '@newrade/core-design-system';
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
import { cssThemeConfig } from '@newrade/ze-design-system/css';

import { companyInfo } from './src/data/company-info';
import { locales } from './src/i18n/locales';
import { Layout } from './src/layout/layout';
import { ProvidersDocs } from './src/providers/providers-docs';
import { ProvidersSite } from './src/providers/providers-site';

import '@newrade/ze-design-system/src/assets/fonts/inter-webfonts/stylesheet.css';

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
export const WrapElementI18n: React.FC<WrapPageElementBrowserArgs> = function WrapElementI18n({
  element,
  props,
}) {
  const pageProps = props as Props;

  /**
   *
   * Translation
   *
   */

  const { language } = useI18next();

  /**
   *
   * Navigation
   *
   */

  const pagePathname = pageProps.path;
  const version = `v${pageProps.pageContext.siteMetadata?.siteVersion}`;

  const designSystemNavigation = useNavigationAPI({
    navigationName: 'Design System',
    navigationComponent: NavComponent.navbar,
    locale: language,
    includedPaths: [/^\/design-system\//],
    sortOrderDirectories: [
      /overview/i,
      /accessibility/i,
      /tech/i,
      /theming/i,
      /where to start/i,
      /get started/i,
      /development process/i,
      /tutorials/i,
      /guides/i,
      /packages/i,
      /reference/i,

      /brand/i,
      /logos/i,
      /principles/i,
      /design philosophy/i,
      /identity/i,
      /gallery/i,

      /foundations/i,
      /colors/i,
      /typography/i,
      /sizing/i,
      /iconography/i,
      /illustration/i,
      /photography/i,
      /animations/i,

      /templates/i,

      /data viz/i,
      /data visualization/i,

      /guidelines/i,
      /components/i,
      /print/i,

      /guidelines/i,

      /assets/i,
      /design tokens/i,
      /tools/i,

      /website api/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
    sortOrderItems: [
      /overview/i,
      /accessibility/i,
      /where to start/i,
      /get started/i,
      /tech/i,
      /theming/i,
      /demos/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
  });

  const docsNavigation = useNavigationAPI({
    navigationName: 'Design System',
    navigationComponent: NavComponent.navbar,
    locale: language,
    includedPaths: [/^\/design-system\//],
    sortOrderDirectories: [
      /overview/i,
      /accessibility/i,
      /tech/i,
      /theming/i,
      /where to start/i,
      /get started/i,
      /development process/i,
      /tutorials/i,
      /guides/i,
      /packages/i,
      /reference/i,

      /brand/i,
      /logos/i,
      /principles/i,
      /design philosophy/i,
      /identity/i,
      /gallery/i,

      /foundations/i,
      /colors/i,
      /typography/i,
      /sizing/i,
      /iconography/i,
      /illustration/i,
      /photography/i,
      /animations/i,

      /templates/i,

      /data viz/i,
      /data visualization/i,

      /guidelines/i,
      /components/i,
      /print/i,

      /guidelines/i,

      /assets/i,
      /design tokens/i,
      /tools/i,

      /website api/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
    sortOrderItems: [
      /overview/i,
      /accessibility/i,
      /where to start/i,
      /get started/i,
      /tech/i,
      /theming/i,
      /demos/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
  });

  const websiteNavigation = useNavigationAPI({
    navigationName: 'Website',
    navigationComponent: NavComponent.navbar,
    locale: language,
    includedPaths: [/^\/$/, /^\/design-system\/$/, /^\/core-docs\/$/],
    sortOrderDirectories: [
      /overview/i,
      /accessibility/i,
      /tech/i,
      /theming/i,
      /where to start/i,
      /get started/i,
      /development process/i,
      /tutorials/i,
      /guides/i,
      /packages/i,
      /reference/i,

      /brand/i,
      /logos/i,
      /principles/i,
      /design philosophy/i,
      /identity/i,
      /gallery/i,

      /foundations/i,
      /colors/i,
      /typography/i,
      /sizing/i,
      /iconography/i,
      /illustration/i,
      /photography/i,
      /animations/i,

      /templates/i,

      /data viz/i,
      /data visualization/i,

      /guidelines/i,
      /components/i,
      /print/i,

      /guidelines/i,

      /assets/i,
      /design tokens/i,
      /tools/i,

      /website api/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
    sortOrderItems: [
      /overview/i,
      /accessibility/i,
      /where to start/i,
      /get started/i,
      /tech/i,
      /theming/i,
      /demos/i,

      /pages/i,
      /sections/i,
      /blocks/i,
    ],
  });

  const navbar: NavbarAPI = {
    name: 'Navbar',
    variant: Variant.primary,
    colorScheme: COLOR_SCHEME.DARK,
    layout: NavbarLayout.standard,
    navigation: {
      component: NavComponent.navbar,
      links: getLinksFromTopSubNavigation(designSystemNavigation.subNavigation),
    },
  };

  const sidebarNavigationForCurrentpage = getSubNavigationForPath({
    path: pagePathname,
    navigations: designSystemNavigation.subNavigation,
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
      ...designSystemNavigation,
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
      ...designSystemNavigation,
      component: NavComponent.footer,
    },
    version,
    companyInfo,
  };

  switch (pageProps.pageContext.layout) {
    /**
     * Layout for the design system documentation
     */
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
          >
            {element}
          </LayoutDocs>
        </ProvidersDocs>
      );
    }
    /**
     * Layout for the website / landing page
     */
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
