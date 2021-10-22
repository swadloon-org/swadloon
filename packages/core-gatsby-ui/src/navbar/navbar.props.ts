import { SITE_LANGUAGES } from '@newrade/core-common/src';
import { PrimitiveProps } from '@newrade/core-react-ui';
import { NavbarAPI, NavbarLayout } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../blocks/block.props';

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

export type NavbarModularProps = Omit<
  NavbarProps,
  | 'menuOpened'
  | 'HomeLink'
  | 'tagText'
  | 'onClickMenuButton'
  | 'currentLanguage'
  | 'languages'
  | 'onChangeLang'
> & {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  leftDesktop?: React.ReactNode;
  centerDesktop?: React.ReactNode;
  rightDesktop?: React.ReactNode;
};

/**
 * Defines a component for each custom layout
 */
export type CustomNavbarLayoutComponents<CustomNavbarLayouts extends string> = {
  [key in CustomNavbarLayouts | NavbarLayout]?: (props: NavbarProps) => React.ReactElement | null;
};

/**
 * Define the API of the NavbarRenderer component
 */
export type NavbarRendererProps<
  CustomNavbarLayouts extends string = '',
  CustomBlockVariants extends string = ''
> = NavbarProps & {
  navbarComponents?: CustomNavbarLayoutComponents<CustomNavbarLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
