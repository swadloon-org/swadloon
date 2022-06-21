import { PartialOrNull } from '../utilities.js';

import { BlockAPI, BlockType } from './block.api.js';
import { MediaAPI } from './media.api.js';

export type BlockBackgroundImageAPI = BlockAPI &
  PartialOrNull<{
    /**
     * Type of the block should be image
     */
    type: BlockType.imageBackground | string;
    /**
     * A single media
     */
    media: MediaAPI;
  }>;
