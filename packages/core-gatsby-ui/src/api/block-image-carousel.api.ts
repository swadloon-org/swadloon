import { CarouselDirection, Variant } from '@newrade/core-design-system';
import { BlockType } from '../blocks/block.props';
import { LinkAPI } from './link.api';
import { MediaCollectionV2API } from './media-collection-v2.api';

export type BlockImageAPI = {
  id: string;
  name?: string | null;
  variant?: Variant | null | string;
  type?: BlockType.carousel | null | string;
  carrousel?: CarouselDirection | null;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  link?: LinkAPI;
  medias?: MediaCollectionV2API[];
};
