import { CommonComponentProps } from '@newrade/core-react-ui';

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

export type BlockProps = CommonComponentProps & {
  /**
   * Optional name
   */
  name?: string | null;
  /**
   * Controls the visual importance of the section.
   */
  variant?: BlockVariant | null | string;
};
