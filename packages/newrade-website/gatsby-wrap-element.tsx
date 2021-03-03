import { LayoutDesignSystem } from '@newrade/core-design-system-docs/src';
import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { LayoutDocs } from '@newrade/core-gatsby-ui/src';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import MobileLogo from './src/images/logo-symbol.svg';
import Logo from './src/images/logo.svg';
import { Layout } from './src/layout/layout';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  if (!pageProps?.pageContext?.layout) {
    return <Layout {...pageProps}>{element}</Layout>;
  }

  switch (pageProps.pageContext.layout) {
    case 'docs': {
      return (
        <LayoutDocs DesktopSvgLogo={<Logo />} MobileSvgLogo={<MobileLogo />} {...pageProps}>
          {element}
        </LayoutDocs>
      );
    }
    case 'designSystem': {
      return (
        <LayoutDesignSystem DesktopSvgLogo={<Logo />} MobileSvgLogo={<MobileLogo />} {...pageProps}>
          {element}
        </LayoutDesignSystem>
      );
    }
    case 'default':
    default: {
      return <Layout {...pageProps}>{element}</Layout>;
    }
  }
};
