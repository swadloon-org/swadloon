import { GatsbySSR } from 'gatsby';
import React from 'react';

import { Providers } from './src/providers/providers.js';
import { WrapElement } from './gatsby-wrap-element.js';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

export const wrapPageElement: GatsbySSR['wrapPageElement'] = (args) => {
  // @ts-ignore
  return <WrapElement {...args} />;
};

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <Providers>{element}</Providers>;
};
