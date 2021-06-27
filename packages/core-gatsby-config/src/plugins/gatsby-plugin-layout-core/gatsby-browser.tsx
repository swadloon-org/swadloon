import { wrapPageElementFunction, wrapRootElementFunction } from './src/wrap-page';

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

export const wrapPageElement = wrapPageElementFunction;
export const wrapRootElement = wrapRootElementFunction;
