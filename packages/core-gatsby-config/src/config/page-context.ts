import { SITE_LANGUAGES } from '@newrade/core-common';

import { SOURCE_INSTANCE_NAME } from './gatsby-source-instances.js';
import { PAGE_LAYOUT, PAGE_TEMPLATE } from './page.props.js';
import { GatsbyNodeSiteMetadataFragment, MarkdownChildMdx, Mdx } from './site-graphql-types.js';
import { MdxFrontmatter } from './site-mdx-frontmatter.js';

/**
 * Common page context that all page should receive.
 */
export type GatsbyCommonPageContext<SiteMetadataType = GatsbyNodeSiteMetadataFragment> = {
  /**
   * Contains static information about the Gatsby site.
   */
  siteMetadata?: SiteMetadataType;
  /**
   * Can be the page id, file id, or the path if none are available
   */
  id: string;
  /**
   * Raw name of the node
   * @example /docs/colors.page => colors.page
   */
  name: string;
  /**
   * Formatted name of the page
   * @example /design-system/colors.page => Design System: Colors
   */
  displayName?: string | null;
  /**
   * Locale of the page
   * @example
   *  fr.page.tsx => locale is fr
   *  fr-CA.page.tsx => locale is fr-CA
   *  en.doc.mdx => locale is en
   */
  locale: SITE_LANGUAGES;
  /**
   * Alternate slugs/path of the page in different locales
   * @example
   *  { fr: '/fr/page-name/', 'fr-CA': '/fr-ca/page-name/'}
   */
  alternateLocales?: GatsbyPageAlternateLocale[];
  /**
   * Original relative path of the page's node
   */
  relativePath: string;
  /**
   * Original absolute path of the page's node
   */
  absolutePath: string;
  /**
   * Each page can be rendered using a specific layout
   */
  layout: PAGE_LAYOUT;
  /**
   * Each page can be rendered using a specific template
   */
  template: PAGE_TEMPLATE;
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
   *    `query Page($fileId: String) {...}`
   *  ```
   */
  fileId?: string;
  /**
   * Jsdoc imports list to query extracted jsdoc documents
   *
   * @example
   *  ```ts
   *    `query Page($jsdocImports: String[]!) {...}`
   *  ```
   */
  jsdocImports?: string[];
  /**
   * If the page was created with a source plugin this will be set
   */
  sourceInstance?: SOURCE_INSTANCE_NAME;
  /**
   * Injected frontmatter (from childMdx.frontmatter)
   */
  frontmatter?: MdxFrontmatter | null;
  /**
   * from childMdx.excerpt)
   */
  excerpt?: Mdx['excerpt'];
  /**
   * from childMdx.timeToRead)
   */
  timeToRead?: Mdx['timeToRead'];
  /**
   * from childMdx.tableOfContents)
   */
  tableOfContents?: Mdx['tableOfContents'];
  /**
   * from childMdx.body)
   */
  body?: Mdx['body'];
};

/**
 * For design system pages.
 *
 */
export type GatsbyDesignSystemPageContext = GatsbyCommonPageContext & {
  /**
   * The pageId that should be use to query the full data.
   *
   * @example
   *  ```ts
   *    `query Page($slug: String) {...}`
   *  ```
   */
};

export type GatsbyPageAlternateLocale = {
  locale: SITE_LANGUAGES;
  path: string;
};
