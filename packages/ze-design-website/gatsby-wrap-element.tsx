import { SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyCommonPageContext, SOURCE_INSTANCE_NAME } from '@newrade/core-gatsb-config/config';
import { useNavigationAPI } from '@newrade/core-gatsby-ui/src/hooks/use-navigation-api.hook';
import { WrapElementWithi18N } from '@newrade/core-gatsby-ui/src/i18next/wrap-element-i18n';
import { LayoutDesignSystem } from '@newrade/core-gatsby-ui/src/layout/design-system.layout';
import { LayoutDocs } from '@newrade/core-gatsby-ui/src/layout/docs.layout';
import { NavComponent } from '@newrade/core-website-api';
import '@newrade/ze-design-system/src/assets/fonts/inter-webfonts/stylesheet.css';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { companyInfo } from './src/data/company-info';
import { themeClass } from './src/design-system/theme.css';
import { cssTheme, light, theme } from './src/design-system/theme.treat';
import { locales } from './src/i18n/locales';
import { Layout } from './src/layout/layout';
import { footerNavigation, navbarNavigation } from './src/navigation/navigation';
import { ProvidersDocs } from './src/providers/providers-docs';
import { ProvidersSite } from './src/providers/providers-site';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;
  const currentLang = pageProps.pageContext.locale || SITE_LANGUAGES.EN;

  /**
   * Navigation
   *
   * Footer and Navbar navigation are configured manually
   *
   * Pages navigation are generated below ⬇️
   */

  const navigationDocs = useNavigationAPI({
    navigationName: 'Docs navigation',
    navigationComponent: NavComponent.sidebar,
    includedPaths: [/docs/],
    includeLocales: [currentLang],
  });

  const navigationCoreDocs = useNavigationAPI({
    navigationName: 'Docs navigation',
    navigationComponent: NavComponent.sidebar,
    includedPaths: [/core-docs/],
    includeLocales: [currentLang],
  });

  const navigation =
    props.pageContext.sourceInstance === SOURCE_INSTANCE_NAME.DOCS
      ? navigationDocs.subNavigation?.[0]
      : navigationCoreDocs.subNavigation?.[0];

  switch (pageProps.pageContext.layout) {
    case 'docs': {
      return (
        <WrapElementWithi18N
          props={props}
          i18nOptions={{
            fallbackLng: 'en',
            resources: locales,
          }}
        >
          <ProvidersDocs>
            <LayoutDocs
              {...pageProps}
              companyInfo={companyInfo}
              navigation={navigation}
              footerNavigation={footerNavigation}
              navbarNavigation={navbarNavigation}
            >
              {element}
            </LayoutDocs>
          </ProvidersDocs>
        </WrapElementWithi18N>
      );
    }
    case 'designSystem': {
      return (
        <WrapElementWithi18N
          props={props}
          i18nOptions={{
            fallbackLng: 'en',
            resources: locales,
          }}
        >
          <ProvidersDocs>
            <LayoutDesignSystem
              themeClassname={themeClass}
              treatThemeRef={light}
              theme={{ theme, cssTheme }}
              {...pageProps}
            >
              {element}
            </LayoutDesignSystem>
          </ProvidersDocs>
        </WrapElementWithi18N>
      );
    }
    case 'default':
    default: {
      return (
        <WrapElementWithi18N
          props={props}
          i18nOptions={{
            fallbackLng: 'en',
            resources: locales,
          }}
        >
          <ProvidersSite>
            <Layout {...pageProps}>{element}</Layout>
          </ProvidersSite>
        </WrapElementWithi18N>
      );
    }
  }
};
