import { PartialOrNull } from '../utilities';
import { TagTypeAPI } from './tag-type.api';

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
