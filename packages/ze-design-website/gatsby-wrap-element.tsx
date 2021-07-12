import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { LazyLayoutDesignSystem, LazyLayoutDocs } from '@newrade/core-gatsby-ui/src';
import { cssTheme, theme } from '@newrade/ze-design-system';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import ProvidersDocs from './src/context/providers-docs';
import ProvidersSite from './src/context/providers-site';
import './src/design-system/theme.css';
import { themeClass } from './src/design-system/theme.css';
import { light } from './src/design-system/theme.treat';
import './src/fonts';
import { Layout } from './src/layout/layout';

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
