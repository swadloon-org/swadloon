import { PartialOrNull } from '../utilities';

import { BlockAPI, BlockType } from './block.api';
import { MediaAPI } from './media.api';
import { MediaCollectionV2API } from './media-collection-v2.api';

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
