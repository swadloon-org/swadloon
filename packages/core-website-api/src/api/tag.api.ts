import { TagTypeAPI } from './tag-type.api';

export type TagAPI = {
  /**
   * The name description and type of the tag'
   */

  /**
   * name should be required
   */
  name?: string | '';
  type: TagTypeAPI;

  description?: {
    description?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
};
