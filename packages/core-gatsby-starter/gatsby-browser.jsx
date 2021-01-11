// @ts-check
import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { Providers } from './src/context/providers';
import { Layout } from './src/layout/layout';
import { LayoutDesignSystem } from './src/layout/design-system.layout';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}

/** @type {GatsbyBrowser['wrapPageElement']} */
export const wrapPageElement = ({ element, props }) => {
  /** @type {import('gatsby').PageProps<{}, import('@newrade/core-gatsby-config').GatsbyCommonPageContext>} */
  // @ts-ignore
  const pageProps = props;

  if (!pageProps?.pageContext?.layout) {
    return <Layout {...props}>{element}</Layout>;
  }

  switch (pageProps.pageContext.layout) {
    case 'DOCS': {
      return <Layout {...props}>{element}</Layout>;
    }
    case 'DESIGN_SYSTEM': {
      return <LayoutDesignSystem {...props}>{element}</LayoutDesignSystem>;
    }
    case 'SITE':
    default: {
      return <Layout {...props}>{element}</Layout>;
    }
  }
};

/** @type {GatsbyBrowser['wrapRootElement']} */
export const wrapRootElement = ({ element, props }) => {
  return <Providers>{element}</Providers>;
};
