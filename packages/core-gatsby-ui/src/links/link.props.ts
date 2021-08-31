import { PrimitiveProps } from '@newrade/core-react-ui';
import { LinkType, LinkComponent } from '@newrade/core-website-api';
import { LinkAPI } from '@newrade/core-website-api';

/**
 * Props that all Link components should have
 */
export type LinkProps = PrimitiveProps & {
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
