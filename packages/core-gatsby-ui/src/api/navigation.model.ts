import { NavItem } from '../navigation/nav-item.model';

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
