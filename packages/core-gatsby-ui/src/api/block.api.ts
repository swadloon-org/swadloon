import { PageAPI } from './page.api';
import { BlockVariant } from '../blocks/block.props';

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
  link?: {
    label?: string;
    page?: Partial<PageAPI>;
  };
};
