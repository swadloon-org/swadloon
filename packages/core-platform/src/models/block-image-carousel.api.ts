import { CarouselDirection } from '@newrade/core-design-system';

import { PartialOrNull } from '../utilities';

import { BlockType } from './block.api';
import { MediaCollectionV2API } from './media-collection-v2.api';

export type BlockImageCarouselAPI = PartialOrNull<{
  type: BlockType.carousel | string;
  carouselDirection: CarouselDirection | string;
  medias: MediaCollectionV2API;
}>;
