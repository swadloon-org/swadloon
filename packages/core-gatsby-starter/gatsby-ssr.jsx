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
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

/** @type {GatsbySSR['wrapRootElement']} */
export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
