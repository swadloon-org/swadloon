import { NavbarProps } from '@newrade/core-react-ui';
import { NavbarLayout } from '@newrade/core-website-api';

import { CustomBlockVariantComponents } from '../blocks/block.props.js';

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
