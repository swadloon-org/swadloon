import { MdxFrontmatter } from '@newrade/core-gatsby-config/lib/config';

export type NavItem = {
  /**
   * Raw node name of the item or dir
   * @example home.page for home.page.tsx
   */
  name: string | '';
  /**
   * Optional display name
   */
  displayName?: string;
  /**
   * Path or slug for the directory or page
   * @example /path /path/my-page/
   */
  path: string;
  /**
   * Only available for .md/.mdx pages
   */
  frontmatter?: MdxFrontmatter | null;
  /**
   * Sub items
   */
  items?: NavItem[];
};
