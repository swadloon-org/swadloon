import { CommonComponentProps } from '@newrade/core-react-ui';
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
}

export type BlockProps = CommonComponentProps & {};
