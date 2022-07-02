import type { PartialOrNull } from '@newrade/core-types';

import { BlockAPI, BlockType } from './block.api.js';
import { MediaAPI } from './media.api.js';

export type BlockVideoAPI = BlockAPI &
  PartialOrNull<{
    /**
     * Type of the block should be image
     */
    type: BlockType.video | string;
    /**
     * A single media
     */
    media: MediaAPI;
  }>;
