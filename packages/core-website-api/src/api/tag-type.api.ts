import { PartialOrNull } from '../utilities';
import { ChildMDXAPI } from './child-mdx.api';

export type TagTypeAPI = PartialOrNull<{
  /**
   * The category name
   */
  name: string;
  /**
   * The TagType description
   */
  description: {
    text: string;
    childMdx: ChildMDXAPI;
  };
}>;
