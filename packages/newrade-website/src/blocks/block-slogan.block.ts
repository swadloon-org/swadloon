import { BlockAPI, BlockType } from '@newrade/core-gatsby-ui/src';

import BlockSloganMd from './block-slogan.md';

export const BlockSlogan: BlockAPI = {
  id: 'block-slogan',
  name: 'slogan',
  type: BlockType.text,
  text: {
    childMdx: {
      body: BlockSloganMd,
    },
  },
};
