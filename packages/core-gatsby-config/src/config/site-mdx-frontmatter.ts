/**
 * All properties supported in markdown frontmatter
 */

export type MdxFrontmatter = {
  /**
   * The title of the document
   */
  title: string;
  /**
   * Subject of the article
   */
  subject: string;
  /**
   * Keywords for the document
   */
  tags?: Array<string>;
  /**
   * Summary of the article, should be below 160 char
   */
  description?: string;
  /**
   * Version of the article (will be shown visually in the navigation)
   */
  version?: string;
  /**
   * 'true' => will be built and be visible in prod
   * 'false' => not final (a visual indicator will appear)
   *
   * @default 'true'
   */
  published?: string;
  /**
   * Document status to indicates to readers if the content is
   *
   * 'published' => ready
   * 'draft' => not final (a visual indicator will appear)
   *
   * @default 'published'
   */
  status?: 'published' | 'draft';
  /**
   * Indicates if the document is deprecated
   */
  deprecated?: string;
  /**
   * Url for the edit link buton
   */
  editPageUrl?: string;
  /**
   * Label to enable the next page button
   */
  nextPageLabel?: string;
  /**
   * Url to enable the next page button
   */
  nextPageUrl?: string;
  /**
   * Indicates if the component is ready for use
   */
  componentStatus?: 'wip' | 'published';
  /**
   * Version of the component on the page
   */
  componentVersion?: string;
  /**
   * Indicates if the component has tests written
   */
  componentTests?: 'ok' | 'missing';
};
