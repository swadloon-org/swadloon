import { PartialOrNull } from '../utilities.js';

import { BlockAPI, BlockType } from './block.api.js';
import { MediaAPI } from './media.api.js';
import { MediaCollectionV2API } from './media-collection-v2.api.js';

/**
 * @deprecated please use BlockImageAPIV2
 */
export type BlockImageAPIV1 = BlockAPI &
  PartialOrNull<{
    /**
     * Type of the block should be image
     */
    type: BlockType.image | string;
    /**
     * A single media
     */
    medias: MediaCollectionV2API[];
  }>;

export type BlockImageAPIV2 = BlockAPI &
  PartialOrNull<{
    /**
     * Type of the block should be image
     */
    type: BlockType.image | string;
    /**
     * A single media
     */
    media: MediaAPI;
  }>;
