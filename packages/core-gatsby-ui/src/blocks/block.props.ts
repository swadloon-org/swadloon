import { PrimitiveProps } from '@newrade/core-react-ui';
import {
  BlockGoogleMapAPI,
  BlockImageAPIV2,
  BlockImageAPIV1,
  BlockType,
} from '@newrade/core-website-api';
import { BlockAPI } from '@newrade/core-website-api';

/**
 * Props that all Block components should have
 */
export type BlockProps = PrimitiveProps & {
  /** if the block whether it is visible in the viewport */
  inView?: boolean;
  /** block data */
  block?: BlockAPI | BlockImageAPIV1 | BlockGoogleMapAPI | BlockImageAPIV2 | null;
};

/**
 * Defines a component for each custom block variant
 */
export type CustomBlockVariantComponents<CustomBlockVariants extends string> = {
  [key in CustomBlockVariants | BlockType]?: (props: BlockProps) => React.ReactElement | null;
};

/**
 * Define the API of the BlockRenderer component
 */
export type BlockRendererProps<CustomBlockVariants extends string = ''> = BlockProps & {
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
