// @ts-check
import React from 'react';
import { GatsbySSR } from 'gatsby';
import { Layout } from './src/layout/layout';
import { Providers } from './src/context/providers';

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
  return <Layout {...pageProps}>{element}</Layout>;
};

/** @type {GatsbySSR['wrapRootElement']} */
// @ts-ignore
export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
