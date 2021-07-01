import { PrimitiveProps } from '@newrade/core-react-ui';
import { FooterAPI, FooterLayout } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../blocks/block.props';

/**
 * Minimal props for a Footer component
 */
export type FooterProps = PrimitiveProps<'footer'> & {
  /** footer data */
  footer?: FooterAPI;
};

/**
 * Defines a component for each custom layout
 */
export type CustomFooterLayoutComponents<CustomFooterLayouts extends string> = {
  [key in CustomFooterLayouts | FooterLayout]?: (props: FooterProps) => React.ReactElement | null;
};

/**
 * Define the API of the FooterRenderer component
 */
export type FooterRendererProps<
  CustomFooterLayouts extends string = '',
  CustomBlockVariants extends string = ''
> = FooterProps & {
  footerComponents?: CustomFooterLayoutComponents<CustomFooterLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
