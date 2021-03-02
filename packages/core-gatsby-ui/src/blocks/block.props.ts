import { CommonComponentProps } from '@newrade/core-react-ui';
import { BlockGoogleMapAPI } from '../api/block-google-map.api';
import { BlockAPI } from '../api/block.api';
import { CustomBlockVariantComponents } from '../sections/section.props';

export enum BlockVariant {
  /**
   * Used for markdown text and content.
   */
  text = 'text',
  /**
   * Display a single image
   */
  image = 'image',
  /**
   * Carousel
   */
  carousel = 'carousel',
  /**
   * Display a Google Maps
   */
  googleMaps = 'googleMaps',
}

/**
 * Props that all Block components should have
 */
export type BlockProps = CommonComponentProps & {
  /** tells the block whether it is visible in the viewport */
  inView?: boolean;
  /** block data */
  block?: BlockAPI | BlockGoogleMapAPI | null;
};

/**
 * Define the API of the BlockRenderer component
 */
export type BlockRendererProps<CustomBlockVariants extends string = ''> = BlockProps & {
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
