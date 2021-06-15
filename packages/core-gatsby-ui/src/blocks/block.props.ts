import { CommonComponentProps } from '@newrade/core-react-ui';
import { BlockGoogleMapAPI, BlockImageAPIV2, BlockImageAPIV1 } from '@newrade/core-website-api';
import { BlockAPI } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../sections/section.props';

/**
 * Props that all Block components should have
 */
export type BlockProps = CommonComponentProps & {
  /** tells the block whether it is visible in the viewport */
  inView?: boolean;
  /** block data */
  block?: BlockAPI | BlockImageAPIV1 | BlockGoogleMapAPI | BlockImageAPIV2 | null;
};

/**
 * Define the API of the BlockRenderer component
 */
export type BlockRendererProps<CustomBlockVariants extends string = ''> = BlockProps & {
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
