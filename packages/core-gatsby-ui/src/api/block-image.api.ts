import { Variant } from '@newrade/core-design-system';
import { BlockType } from '../blocks/block.props';
import { LinkAPI } from './link.api';
import { MediaAPI } from './media.api';

export type BlockImageAPI = {
  id: string;
  name?: string | null;
  variant?: Variant | null | string;
  type?: BlockType | null | string;
  text?: {
    text?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
  link?: LinkAPI;
  media?: MediaAPI | null;
};
