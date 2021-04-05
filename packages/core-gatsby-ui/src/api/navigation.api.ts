import { LinkAPI } from './link.api';

export type NavigationAPI = {
  /**
   * The name of the navigation, e.g. 'main site footer', or 'mobile sidenav'
   */
  name: string;
  /**
   * Controls how the navigation item is rendered
   */
  component: NavComponent;
  /**
   * Links to other pages or external pages
   */
  links: LinkAPI[];
  /**
   * Navigation items
   */
  subNavigation?: (NavigationAPI | null | undefined)[] | null;
};

enum NavComponent {
  navbar = 'navbar',
  sidebar = 'sidebar',
  link = 'link',
  menu = 'menu',
  button = 'button',
}
