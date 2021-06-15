import { IFixedObject, IFluidObject } from 'gatsby-background-image';
import { PartialOrNull } from '../utilities';

export type MediaAPI = PartialOrNull<{
  /**
   * The name of the media
   */
  name: string;
  /**
   * Media specific for mobile
   */
  mediaMobile: {
    title: string;
    description: string;
    file: any;
    fluid: IFluidObject;
    fixed: IFixedObject;
  };
  backgroundPositionMobileY?: string;
  /**
   * Media for desktop if mediaMobile is set
   */
  media: {
    title: string;
    description: string;
    file: any;
    fluid: IFluidObject;
    fixed: IFixedObject;
  };
  backgroundPositionY?: string;
}>;
