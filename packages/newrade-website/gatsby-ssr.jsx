import React from 'react';
import { GatsbySSR } from 'gatsby';
import { Layout } from './src/layouts/layout';
import { Providers } from './src/layouts/providers';

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

/** @type {GatsbySSR['onRenderBody']} */
export const onRenderBody = (args) => {
  // args.setPostBodyComponents([
  //   <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7954462.js"></script>,
  // ]);
};
