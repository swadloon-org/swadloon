import { GatsbyCommonPageContext } from '@newrade/core-gatsb-config/config';
import { WrapElementWithi18N } from '@newrade/core-gatsby-ui/src/i18next/wrap-element-i18n';
import { LazyLayoutDesignSystem } from '@newrade/core-gatsby-ui/src/layout/design-system-lazy.layout';
import { LazyLayoutDocs } from '@newrade/core-gatsby-ui/src/layout/docs-lazy.layout';
import '@newrade/ze-design-system/src/assets/fonts/inter-webfonts/stylesheet.css';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { themeClass } from './src/design-system/theme.css';
import { cssTheme, light, theme } from './src/design-system/theme.treat';
import { locales } from './src/i18n/locales';
import { Layout } from './src/layout/layout';
import { ProvidersDocs } from './src/providers/providers-docs';
import { ProvidersSite } from './src/providers/providers-site';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  switch (pageProps.pageContext.layout) {
    case 'docs': {
      return (
        <WrapElementWithi18N
          props={props}
          i18nOptions={{
            fallbackLng: 'fr',
            resources: locales,
          }}
        >
          <ProvidersDocs>
            <LazyLayoutDocs {...pageProps}>{element}</LazyLayoutDocs>
          </ProvidersDocs>
        </WrapElementWithi18N>
      );
    }
    case 'designSystem': {
      return (
        <WrapElementWithi18N
          props={props}
          i18nOptions={{
            fallbackLng: 'fr',
            resources: locales,
          }}
        >
          <ProvidersDocs>
            <LazyLayoutDesignSystem
              themeClassname={themeClass}
              treatThemeRef={light}
              theme={{ theme, cssTheme }}
              {...pageProps}
            >
              {element}
            </LazyLayoutDesignSystem>
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
            fallbackLng: 'fr',
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
