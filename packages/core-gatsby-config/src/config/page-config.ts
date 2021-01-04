import { GatsbyNodeSiteMetadataFragment } from './site-graphql-types';
import { SITE_LANGUAGES } from './site-languages';

/**
 * Common page context that all page should receive.
 */
export type GatsbyCommonPageContext<SiteMetadataType = GatsbyNodeSiteMetadataFragment> = {
  /**
   * Contains general info about the Gatsby site.
   */
  siteMetadata: SiteMetadataType;
  /**
   * Can be the page id, file id, or the path if none are available
   */
  id: string;
  /**
   * Display name of the page
   */
  name: string;
  /**
   * Locale of the page
   * @example
   *  fr.page.tsx
   *  fr_CA.page.tsx
   *  en.doc.mdx
   *  doc.md (with frontmatter data)
   */
  locale: SITE_LANGUAGES;
};

/**
 * For Contentful pages that will receive an id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with external CMSes: e.g. all pages ids are
 * retrieved in gatsby-node.js and then for each page, the pageId is passed in
 * the context. The page template will then use that id as
 */
export type GatsbyContentfulPageContext = GatsbyCommonPageContext & {
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

/**
 * For src pages that will receive a file id and then run a full query to receive all data.
 *
 * This is usually the case with pages created with a source file plugin (e.g. in src/pages)
 */
export type GatsbySrcPageContext = GatsbyCommonPageContext & {
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
 * For markdown pages that will receive a slug and then run a full query to receive all data.
 * This is usually the case with pages created with MDX (.md and .mdx files).
 *
 */
export type GatsbyMarkdownFilePageContext = GatsbyCommonPageContext & {
  /**
   * The pageId that should be use to query the full data.
   *
   * @example
   *  ```ts
   *    `query Page($slug: String) {...}`
   *  ```
   */
  slug: string;
};

/**
 * Typing for Gatsby page's Context object
 * @deprecated
 */
export type GatsbyBlogPostContext = {
  blogPostId: string;
  blogPath: string;
};
