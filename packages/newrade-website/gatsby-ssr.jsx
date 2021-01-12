// @ts-check
import React from 'react';
import { GatsbySSR } from 'gatsby';
import { Layout } from './src/layout/layout';
import { Providers } from './src/context/providers';
import { LayoutDesignSystem } from './src/layout/design-system.layout';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

/** @type {GatsbySSR['wrapPageElement']} */
// @ts-ignore
export const wrapPageElement = ({ element }) => {
  /** @type {import('gatsby').PageProps<{}, import('@newrade/core-gatsby-config').GatsbyCommonPageContext>} */
  // @ts-ignore
  const pageProps = props;

  if (!pageProps?.pageContext?.layout) {
    return <Layout {...pageProps}>{element}</Layout>;
  }

  switch (pageProps.pageContext.layout) {
    case 'DOCS': {
      return <Layout {...pageProps}>{element}</Layout>;
    }
    case 'DESIGN_SYSTEM': {
      return <LayoutDesignSystem {...pageProps}>{element}</LayoutDesignSystem>;
    }
    case 'SITE':
    default: {
      return <Layout {...pageProps}>{element}</Layout>;
    }
  }
};

/** @type {GatsbySSR['wrapRootElement']} */
// @ts-ignore
export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
