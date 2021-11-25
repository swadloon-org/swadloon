import { PartialOrNull } from '../utilities';

import { BlockAPI, BlockType } from './block.api';
import { MediaAPI } from './media.api';

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
