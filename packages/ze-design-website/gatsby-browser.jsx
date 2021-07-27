// @ts-check
import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { WrapElement } from './gatsby-wrap-element';
import Providers from './src/providers/providers';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

/** @type {GatsbyBrowser['wrapPageElement']} */
export const wrapPageElement = (args) => {
  return <WrapElement {...args} />;
};

/** @type {GatsbyBrowser['wrapRootElement']} */
export const wrapRootElement = ({ element, props }) => {
  return <Providers>{element}</Providers>;
};
