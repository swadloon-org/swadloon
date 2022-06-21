import { PartialOrNull } from '../utilities.js';

import { TagTypeAPI } from './tag-type.api.js';

export type TagAPI = PartialOrNull<{
  /**
   * The text content of the tag
   */
  text: string;
  /**
   * What kind of tag this is
   */
  type: TagTypeAPI;
}>;
