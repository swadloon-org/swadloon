import { SITE_LANGUAGES } from '@newrade/core-common';
import { NavbarAPI } from '@newrade/core-website-api';

import { PrimitiveProps } from '../primitive/primitive.props.js';

/**
 * Minimal props for a Navbar component
 */
export type NavbarProps = PrimitiveProps<'nav'> & {
  /**
   * Navbar API data
   */
  navbar?: NavbarAPI;
  /**
   * How the sidebar is placed in the layout
   * @description
   *  - fixed: on top of all component, fixed on the top
   *  - normal:  will be positioned like the rest of the content (position static)
   */
  navbarMode?: 'fixed' | 'normal';
  /**
   * Used to set the close or menu icon
   */
  menuOpened?: boolean;
  /**
   * Inject a link around the logo
   * @example
   *  <NavBar ... HomeLink={<GatsbyLink to={'/'} />} />
   */
  HomeLink?: React.ReactNode;
  /**
   * Allow to override the max-width of the content
   */
  maxWidth?: string;
  /**
   * Text to put in a tag next to the logo
   */
  tagText?: string;
  /**
   * Handle the menu button event
   */
  onClickMenuButton?: (event: React.MouseEvent) => void;
  /**
   * Current language
   */
  currentLanguage?: SITE_LANGUAGES;
  /**
   * Available languages
   */
  languages?: SITE_LANGUAGES[];
  /**
   * Handle language change
   */
  onChangeLang?: (lang: SITE_LANGUAGES) => void;
};
