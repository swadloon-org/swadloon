import { GatsbyBrowser } from 'gatsby';
import React from 'react';

import { Providers } from './src/providers/providers';
import { WrapElement } from './gatsby-wrap-element';

/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = (args) => {
  return <WrapElement {...args} />;
};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element, props }) => {
  return <Providers>{element}</Providers>;
};
