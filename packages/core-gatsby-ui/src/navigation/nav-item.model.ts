import { MdxFrontmatter } from '@newrade/core-gatsb-config/config';

export type NavItem = {
  name: string | '';
  displayName?: string;
  path: string;
  frontmatter?: MdxFrontmatter | null;
  items?: NavItem[];
};
