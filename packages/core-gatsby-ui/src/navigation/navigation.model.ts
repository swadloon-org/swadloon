import { NavItem } from './nav-item.model.js';

export type Navigation = {
  /**
   * The name of the navigation, e.g. 'main site footer', or 'mobile sidenav'
   */
  name: string;
  /**
   * Navigation items
   */
  items: NavItem[];
};
