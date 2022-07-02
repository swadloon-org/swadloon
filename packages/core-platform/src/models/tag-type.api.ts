import type { PartialOrNull } from '@newrade/core-types';

import { ChildMDXAPI } from './child-mdx.api.js';

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
