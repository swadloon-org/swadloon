export type TagTypeAPI = {
  /**
   * The name and description of the tag type'
   */

  /**
   * name should be required
   */
  name?: {
    name?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };

  description?: {
    description?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };
};
