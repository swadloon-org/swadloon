import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';

/**
 * Older version just used with MIR
 */
export type GatsbyCoreContentfulMIRPluginOptions = {
  /**
   * Name of the package that runs this plugin
   * @example my-website
   */
  packageName: string;
  /**
   * Plugin name
   * @example gatsby-plugin-core
   */
  pluginName?: string;
  /**
   * Controls in which locales the pages get generated
   */
  locales?: ('fr-CA' | 'en-CA')[];
  /**
   * Enable or disable features
   */
  features: {
    renderBlogPosts: boolean;
    renderPortfolio: boolean;
  };
};

/**
 * Typing for Gatsby page's Context object
 * only for MIR.
 */
export type GatsbyBlogPostMIRContext = {
  blogPostId: string;
  blogPath: string;
};

/**
 * For Contentful pages that will receive an id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with external CMSes: e.g. all pages ids are
 * retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context. The page template will then use that id as
 */
export type GatsbyContentfulMIRPageContext = GatsbyCommonPageContext & {
  /**
   * The pageId that should be use to query the full data.
   *
   * @example
   *  ```ts
   *    `query Page($pageId: String) {...}`
   *  ```
   */
  pageId: string;
  /**
   * Contentful specific page informations below
   */
  type: string;
  slug: string;
};
