import { TagAPI } from '..';
import { PartialOrNull } from '../utilities';
import { LinkAPI } from './link.api';

export enum NavComponent {
  navbar = 'navbar',
  sidebar = 'sidebar',
  footer = 'footer',
  menu = 'menu',
  links = 'links',
  link = 'link',
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
  links: LinkAPI[];
  /**
   * Sub-navigation
   */
  subNavigation?: (NavigationAPI | null | undefined)[] | null;
  /**
   * Tags related to the navigation, e.g. a "new", "updated" or version tag "v2"
   */
  tags?: TagAPI[];
}>;
