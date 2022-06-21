import { PartialOrNull } from '../utilities.js';

import { LinkAPI } from './link.api.js';
import { TagAPI } from './tag.api.js';

export enum NavComponent {
  /**
   * High level component that can contain menus, links, link, button...
   */
  navbar = 'navbar',
  /**
   * High level component that can contain menus, links, link, button...
   */
  sidebar = 'sidebar',
  /**
   * High level component that can contain links, link, button...
   */
  footer = 'footer',
  /**
   * Menu contains other items
   */
  menu = 'menu',
  /**
   * Links is a group of 1 or more links
   */
  links = 'links',
  /**
   * Link can be an external link, internal page (active state, a button)
   */
  link = 'link',
  /**
   * A button can be used to navigate or trigger an action
   */
  button = 'button',
}

export type NavigationAPI = PartialOrNull<{
  /**
   * System unique identifier
   */
  id: string;
  /**
   * The name of the navigation, e.g. 'main site footer', or 'mobile sidenav'
   */
  name: string;
  /**
   * The partial path for navigation level
   */
  path: string;
  /**
   * User facing label
   */
  label: string;
  /**
   * Controls how the navigation item is rendered
   */
  component: NavComponent;
  /**
   * Links to other pages or external pages
   */
  links?: LinkAPI[];
  /**
   * If the navigation object is a link or button component (NavComponent),
   * the link property will contain a LinkAPI object
   */
  link?: LinkAPI;
  /**
   * Sub-navigation
   */
  subNavigation?: (NavigationAPI | null | undefined)[] | null;
  /**
   * Tags related to the navigation, e.g. a "new", "updated" or version tag "v2"
   */
  tags?: TagAPI[];
}>;
