export type MediaAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  media?: {
    title?: string;
    description?: string;
    file?: any;
  };
  backgroundPositionY?: string | null;
};
