import { CarouselDirection } from '@newrade/core-design-system';
import type { PartialOrNull } from '@newrade/core-types';

import { BlockType } from './block.api.js';
import { MediaCollectionV2API } from './media-collection-v2.api.js';

export type BlockImageCarouselAPI = PartialOrNull<{
  type: BlockType.carousel | string;
  carouselDirection: CarouselDirection | string;
  medias: MediaCollectionV2API;
}>;
