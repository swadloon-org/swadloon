import { BlockAPI } from '../blocks/block.api';
import { SectionLayout } from './section.props';

export type SectionAPI = {
  name: string;
  layout: SectionLayout;
  blocks: BlockAPI[];
};
