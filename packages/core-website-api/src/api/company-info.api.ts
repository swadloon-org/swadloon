import { PartialOrNull } from '../utilities';

export type CompanyInfoAPI = PartialOrNull<{
  /**
   * The name and description of the tag type'
   */
  companyName: string;
  description: string;
  linkedinPageURL: string;
  facebookPageURL: string;
  instagramPageURL: string;
  twitterPageURL: string;
  metadataTwitterSite: string;
  metadataTwitterCreator: string;
  metadataSiteName: string;
  copyright: string;
}>;
