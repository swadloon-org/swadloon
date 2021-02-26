import { BlockAPI } from '../blocks/block.api';
import { SectionLayout } from './section.props';

export type SectionAPI = {
  name?: string | null;
  layout?: SectionLayout | null | string;
  blocks?: (BlockAPI | null | undefined)[] | null;
};
