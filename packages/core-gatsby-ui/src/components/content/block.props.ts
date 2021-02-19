import { CommonComponentProps } from '@newrade/core-react-ui';

export enum BlockType {
  /**
   * Will honor the content margins.
   */
  text = 'text',
}

export type BlockProps = CommonComponentProps & {
  /**
   * Controls the visual importance of the section.
   */
  type?: BlockType;
};
