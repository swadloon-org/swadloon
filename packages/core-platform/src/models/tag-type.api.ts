import { PartialOrNull } from '../utilities';

import { ChildMDXAPI } from './child-mdx.api';

export type TagTypeAPI = PartialOrNull<{
  /**
   * The tag type name
   */
  name: string;
  /**
   * The description
   */
  description: {
    text: string;
    childMdx: ChildMDXAPI;
  };
  //   /**
  //  * Text color
  //  */
  //    text: string;
}>;
