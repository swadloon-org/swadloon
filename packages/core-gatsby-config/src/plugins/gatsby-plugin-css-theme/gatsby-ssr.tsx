import { GatsbySSR } from 'gatsby';
import React from 'react';

// @ts-ignore
import detectCssColorScheme from '!!raw-loader!babel-loader!ts-loader!./detect-color-scheme.ts';

/**
 * Gatsby Server Rendering APIs
 *
 * @see https://www.gatsbyjs.com/docs/ssr-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/
 */

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {
  const minifiedScript = `${detectCssColorScheme}`
    .replace(/\n/g, ' ')
    .replace(/"use strict";/g, '')
    .replace(/ {2}/g, '')
    .replace(/Object\.defineProperty\(exports, "__esModule", \{ value: true \}\);/g, '');

  setHeadComponents([
    <script
      key={1}
      dangerouslySetInnerHTML={{
        __html: minifiedScript,
      }}
    />,
  ]);
};
