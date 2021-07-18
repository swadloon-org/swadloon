import { PrimitiveProps } from '@newrade/core-react-ui/src';
import { LinkType, LinkComponent } from '@newrade/core-website-api';
import { LinkAPI } from '@newrade/core-website-api';

export enum LinkRendererSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

/**
 * Props that all Link components should have
 */
export type LinkProps = PrimitiveProps & {
  /**
   * A link can be rendered with different components (button, link, etc)
   * the side property can be set to tell the link renderer what size to render
   */
  size?: LinkRendererSize;
  /**
   * link data
   */
  link?: LinkAPI | null;
};

/**
 * Defines a component for each custom link variant
 */
export type CustomLinkVariantComponents<CustomLinkVariants extends string> = {
  [key in CustomLinkVariants | LinkType | LinkComponent]?: (
    props: LinkProps
  ) => React.ReactElement | null;
};

/**
 * Define the API of the LinkRenderer component
 */
export type LinkRendererProps<CustomLinkVariants extends string = ''> = LinkProps & {
  linkComponents?: CustomLinkVariantComponents<CustomLinkVariants>;
};
