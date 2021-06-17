import { LinkAPI } from './link.api';

export enum NavComponent {
  navbar = 'navbar',
  sidebar = 'sidebar',
  footer = 'footer',
  link = 'link',
  menu = 'menu',
  button = 'button',
}

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
   * Sub-navigation
   */
  subNavigation?: (NavigationAPI | null | undefined)[] | null;
};
