// @ts-check
import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { Providers } from './src/context/providers';
import { Layout } from './src/layout/layout';

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
  return <Layout {...pageProps}>{element}</Layout>;
};

/** @type {GatsbyBrowser['wrapRootElement']} */
export const wrapRootElement = ({ element, props }) => {
  return <Providers>{element}</Providers>;
};
