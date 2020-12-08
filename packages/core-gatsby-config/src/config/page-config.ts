/**
 * For pages that will receive an id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with external CMSes: e.g. all pages ids are
 * retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context. The page template will then use that id as
 */
export type GatsbyPageContext<SiteMetadataType> = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: SiteMetadataType;
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
 * For src pages that will receive a file id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with a source file plugin (e.g. in src/pages)
 */
export type GatsbySrcPageContext<SiteMetadataType> = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: SiteMetadataType;
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
 * For markdown pages that will receive an id and then run a full query to receive all data.
 * This is usually the case with pages created with MDX (.md and .mdx files).
 *
 * All file ids are retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context.
 */
export type GatsbyMarkdownFilePageContext<SiteMetadataType> = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: SiteMetadataType;
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
 * @deprecated
 */
export type GatsbyBlogPostContext = {
  blogPostId: string;
  blogPath: string;
};
