import { CommonComponentProps } from '@newrade/core-react-ui';

export enum BlockType {
  /**
   * Used for markdown text and content.
   */
  markdown = 'markdown',
}

export type BlockProps = CommonComponentProps & {
  /**
   * Controls the visual importance of the section.
   */
  type?: BlockType;
};
