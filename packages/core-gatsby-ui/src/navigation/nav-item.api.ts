export type NavItemAPI = {
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
   * Sub items
   */
  items?: NavItemAPI[];
};
