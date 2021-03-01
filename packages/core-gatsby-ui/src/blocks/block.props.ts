import { CommonComponentProps } from '@newrade/core-react-ui';
import { BlockGoogleMapAPI } from '../api/block-google-map.api';
import { BlockAPI } from '../api/block.api';

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
  /**
   * Display a custom step
   */
  customStep = 'customStep',
  /**
   * Display a custom cost item
   */
  customCostItem = 'customCostItem',
}

export type BlockProps = CommonComponentProps & {
  block?: BlockAPI | BlockGoogleMapAPI | null;
};
