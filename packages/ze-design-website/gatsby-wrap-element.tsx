import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config/lib/config';
import { LazyLayoutDesignSystem } from '@newrade/core-gatsby-ui/src/layout/design-system-lazy.layout';
import { LazyLayoutDocs } from '@newrade/core-gatsby-ui/src/layout/docs-lazy.layout';
import '@newrade/ze-design-system/lib/assets/fonts/inter-webfonts/stylesheet.css';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import './src/design-system/theme.css';
import { themeClass } from './src/design-system/theme.css';
import { cssTheme, light, theme } from './src/design-system/theme.treat';
import { Layout } from './src/layout/layout';
import { ProvidersDocs } from './src/providers/providers-docs';
import { ProvidersSite } from './src/providers/providers-site';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  if (!pageProps?.pageContext?.layout) {
    return (
      <ProvidersSite>
        <Layout {...pageProps}>{element}</Layout>
      </ProvidersSite>
    );
  }

  switch (pageProps.pageContext.layout) {
    case 'docs': {
      return (
        <ProvidersDocs>
          <LazyLayoutDocs {...pageProps}>{element}</LazyLayoutDocs>
        </ProvidersDocs>
      );
    }
    case 'designSystem': {
      return (
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
      );
    }
    case 'default':
    default: {
      return (
        <ProvidersSite>
          <Layout {...pageProps}>{element}</Layout>
        </ProvidersSite>
      );
    }
  }
};
