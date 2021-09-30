import { SITE_LANGUAGES } from '@newrade/core-common';
import { PrimitiveProps } from '@newrade/core-react-ui';
import { SidebarAPI, SidebarLayout } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../blocks/block.props';

/**
 * Minimal props for a Sidebar component
 */
export type SidebarProps = PrimitiveProps<'nav'> & {
  /**
   * Sidebar API data
   */
  sidebar?: SidebarAPI;
  /**
   * How the sidebar is placed in the layout
   * @description
   *  - floating: on top of all component, on the left side
   *  - docked:  under the navbar, always open on desktop
   *  - hanging: floats (fixed) near the main content
   *  - sticky: follow normal content flow, with sticky behavior
   */
  sidebarMode?: 'floating' | 'docked' | 'hanging' | 'sticky';
  /**
   * State of the sidebar
   */
  sidebarOpened?: boolean;
  /**
   * active route
   */
  activePathname?: string;
  /**
   * Inject a link around the logo
   * @example
   *  <Sidebar ... HomeLink={<GatsbyLink to={'/'} />} />
   */
  HomeLink?: React.ReactNode;
  /**
   * Handle the menu button event
   */
  onClickMenuButton?: (event: React.MouseEvent) => void;
  /**
   * Handle event on the backdrop
   */
  onClickBackdrop?: (event: React.MouseEvent) => void;
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

/**
 * Defines a component for each custom layout
 */
export type CustomSidebarLayoutComponents<CustomSidebarLayouts extends string> = {
  [key in CustomSidebarLayouts | SidebarLayout]?: (
    props: SidebarProps
  ) => React.ReactElement | null;
};

/**
 * Define the API of the SidebarRenderer component
 */
export type SidebarRendererProps<
  CustomSidebarLayouts extends string = '',
  CustomBlockVariants extends string = ''
> = SidebarProps & {
  sidebarComponents?: CustomSidebarLayoutComponents<CustomSidebarLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
