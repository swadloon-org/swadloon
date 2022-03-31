import { Variant } from '@newrade/core-design-system';

import { PartialOrNull } from '../utilities';

import { ColorModeAPI } from './color-mode.api';
import { LinkAPI } from './link.api';

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
   * Display a Google Maps embed
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

export type BlockAPI = PartialOrNull<
  ColorModeAPI & {
    id: string;
    name: string;
    variant: Variant | string;
    type: BlockType | string;
    alignment: BlockAlignment | string;
    text: {
      text: string;
      childMdx: {
        body: string;
      };
    };
    link: LinkAPI;
  }
>;
