import { Variant } from '@newrade/core-design-system';
import { BlockAlignment, BlockType } from '../blocks/block.props';
import { LinkAPI } from './link.api';
import { MediaCollectionAPI } from './media-collection.api';

export type BlockAPI = {
  id: string;
  name?: string | null;
  variant?: Variant | null | string;
  type?: BlockType | null | string;
  alignment?: BlockAlignment | null | string;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  link?: LinkAPI;
  medias?: MediaCollectionAPI[];
};
