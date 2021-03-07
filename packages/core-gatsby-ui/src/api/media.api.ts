import { IFixedObject, IFluidObject } from 'gatsby-background-image';

export type MediaAPI = {
  /**
   * name should be required
   */
  name?: string | null;
  media?: {
    title?: string;
    description?: string;
    file?: any;
    fluid?: IFluidObject;
    fixed?: IFixedObject;
  };
  // TODO: should we have mediaMobile, mediaDesktop in mediav2 ?
  backgroundPositionY?: string | null;
};
