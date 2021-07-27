import { IFixedObject, IFluidObject } from 'gatsby-background-image';
import { IGatsbyImageData } from 'gatsby-plugin-image';
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
    fullWidth: IGatsbyImageData;
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
    fullWidth: IGatsbyImageData;
  };
  backgroundPositionY?: string;
}>;
