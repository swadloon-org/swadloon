import { GatsbySiteMetadata } from './site-metadata';

/**
 * For pages that will receive an id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with external CMSes: e.g. all pages ids are
 * retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context. The page template will then use that id as
 */
export type GatsbyPageContext = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: GatsbySiteMetadata;
  /**
   * The pageId that should be use to query the full data.
   *
   * @example
   *  ```ts
   *    `query Page($pageId: String) {...}`
   *  ```
   */
  pageId: string;
};

/**
 * For pages that will receive an id and then run a full query to receive all data.
 * This is usually the case with pages created with external CMSes.
 * All page ids are retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context.
 */
export type GatsbyMarkdownFilePageContext = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: GatsbySiteMetadata;
  /**
   * The pageId that should be use to query the full data.
   *
   * @example
   *  ```ts
   *    `query Page($fileId: String) {...}`
   *  ```
   */
  fileId: string;
};

/**
 * Typing for Gatsby page's Context object
 */
export type GatsbyBlogPostContext = {
  blogPostId: string;
  blogPath: string;
};
