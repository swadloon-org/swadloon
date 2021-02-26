import { GoogleMapProps } from '@react-google-maps/api';
import { BlockVariant } from './block.props';

export type BlockGoogleMapAPI = {
  name?: string | null;
  variant?: BlockVariant | null | string;
  text?: {
    text?: string | null;
    childMdx: {
      body: string | null;
    };
  };
  map: GoogleMapProps;
};
