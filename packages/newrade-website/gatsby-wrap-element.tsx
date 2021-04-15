import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { LazyLayoutDesignSystem, LazyLayoutDocs } from '@newrade/core-gatsby-ui/src';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import ProvidersDocs from './src/context/providers-docs';
import ProvidersSite from './src/context/providers-site';
import { cssTheme, theme } from './src/design-system/theme';
import { lightTheme } from './src/design-system/theme.treat';
import LogoReversed from './src/images/logo-reversed.svg';
import MobileLogo from './src/images/logo-symbol.svg';
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
          <LazyLayoutDocs DesktopSvgLogo={<LogoReversed />} MobileSvgLogo={<MobileLogo />} {...pageProps}>
            {element}
          </LazyLayoutDocs>
        </ProvidersDocs>
      );
    }
    case 'designSystem': {
      return (
        <ProvidersDocs>
          <LazyLayoutDesignSystem
            treatThemeRef={lightTheme}
            theme={{ theme, cssTheme }}
            DesktopSvgLogo={<LogoReversed />}
            MobileSvgLogo={<MobileLogo />}
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
