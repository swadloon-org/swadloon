
import { BlockAPI, BlockType } from './block.api.js';

export type BlockGoogleMapAPI = BlockAPI &
  PartialOrNull<{
    type: BlockType.googleMaps | string;
    placeId: string;
    lat: string;
    long: string;
    zoom: string;
  }>;
