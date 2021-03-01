import { BlockVariant } from '../blocks/block.props';
import { LinkAPI } from './link.api';
import { MediaCollectionAPI } from './media-collection.api';

export type BlockAPI = {
  id: string;
  name?: string | null;
  variant?: BlockVariant | null | string;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  link?: LinkAPI;
  medias?: MediaCollectionAPI[];
};
