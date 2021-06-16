// @ts-check
import { GatsbySSR } from 'gatsby';
import React from 'react';
import { WrapElement } from './gatsby-wrap-element';
import { Providers } from './src/context/providers';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

/** @type {GatsbySSR['wrapPageElement']} */
// @ts-ignore
export const wrapPageElement = (args) => {
  return <WrapElement {...args} />;
};

/** @type {GatsbySSR['wrapRootElement']} */
// @ts-ignore
export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>;
};
