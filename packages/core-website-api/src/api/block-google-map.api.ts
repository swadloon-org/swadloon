import { BlockType } from './block.api';

export type BlockGoogleMapAPI = {
  id: string;
  name?: string | null;
  variant?: BlockType | null | string;
  type?: BlockType | null | string;
  placeId?: string;
  lat?: string;
  long?: string;
  zoom?: string;
  text?: {
    text?: string | null;
    childMdx: {
      body: string | null;
    };
  };
};
