import type { PartialOrNull } from '@newrade/core-types';

export type CompanyInfoAPI = PartialOrNull<{
  /**
   * The company name
   */
  companyName: string;
  /**
   * Short description of the company
   */
  description: string;
  linkedinPageURL: string;
  githubPageURL: string;
  facebookPageURL: string;
  instagramPageURL: string;
  twitterPageURL: string;
  metadataTwitterSite: string;
  metadataTwitterCreator: string;
  metadataSiteName: string;
  copyright: string;
}>;
