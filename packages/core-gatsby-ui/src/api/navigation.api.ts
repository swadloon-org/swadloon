import { LinkAPI } from './link.api';

export type NavigationAPI = {
  /**
   * The name of the navigation, e.g. 'main site footer', or 'mobile sidenav'
   */
  name: string;
  links: LinkAPI[];
  /**
   * Navigation items
   */
  subNavigation?: NavigationAPI[];
};
