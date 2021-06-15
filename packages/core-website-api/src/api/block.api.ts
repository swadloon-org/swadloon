import { Variant } from '@newrade/core-design-system';
import { LinkAPI } from './link.api';
import { MediaCollectionAPI } from './media-collection.api';

export enum BlockType {
  /**
   * Used for markdown text and content.
   */
  text = 'text',
  /**
   * Display a single image
   */
  image = 'image',
  /**
   * Display an image as background
   */
  imageBackground = 'imageBackground',
  /**
   * Display a video media
   */
  video = 'video',
  /**
   * Carousel
   */
  carousel = 'carousel',
  /**
   * Display a Google Maps
   */
  googleMaps = 'googleMaps',
}

export enum BlockAlignment {
  /**
   * Align block content to the left
   */
  left = 'left',
  /**
   * Align block content to the left
   */
  center = 'center',
  /**
   * Align block content to the left
   */
  right = 'right',
}

export type BlockAPI = {
  id: string;
  name?: string | null;
  variant?: Variant | null | string;
  type?: BlockType | null | string;
  alignment?: BlockAlignment | null | string;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  link?: LinkAPI;
  medias?: MediaCollectionAPI[];
};
