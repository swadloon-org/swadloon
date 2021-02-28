import { BlockVariant } from '../blocks/block.props';

export type BlockGoogleMapAPI = {
  id: string;
  name?: string | null;
  variant?: BlockVariant | null | string;
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
