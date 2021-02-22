import { CommonComponentProps } from '@newrade/core-react-ui';

export enum BlockType {
  /**
   * Used for markdown text and content.
   */
  text = 'text',
}

export type BlockProps = CommonComponentProps & {
  /**
   * Controls the visual importance of the section.
   */
  type?: BlockType;
};
