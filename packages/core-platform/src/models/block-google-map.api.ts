
import { BlockAPI, BlockType } from './block.api';

export type BlockGoogleMapAPI = BlockAPI &
  PartialOrNull<{
    type: BlockType.googleMaps | string;
    placeId: string;
    lat: string;
    long: string;
    zoom: string;
  }>;
