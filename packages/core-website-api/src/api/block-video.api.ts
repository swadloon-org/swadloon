import { PartialOrNull } from '../utilities';
import { BlockAPI, BlockType } from './block.api';
import { MediaAPI } from './media.api';

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
