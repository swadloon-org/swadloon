import { Variant } from '@newrade/core-design-system';
import { BlockType } from './block.api';
import { LinkAPI } from './link.api';
import { MediaAPI } from './media.api';

export type BlockImageAPI = {
  id: string;
  name?: string | null;
  variant?: Variant | null | string;
  type?: BlockType.image | null | string;
  link?: LinkAPI;
  media?: MediaAPI | null;
};
