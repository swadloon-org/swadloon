import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { Layout } from './src/layouts/layout';
import { Providers } from './src/layouts/providers';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

if (module.hot) {
  module.hot.accept();
}

/** @type {GatsbyBrowser['wrapPageElement']} */
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

/** @type {GatsbyBrowser['wrapRootElement']} */
export const wrapRootElement = ({ element, props }) => {
  return <Providers>{element}</Providers>;
};
