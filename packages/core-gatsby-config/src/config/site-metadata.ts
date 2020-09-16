import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  /**
   * required by `gatsby-plugin-i18n`, `gatsby-plugin-robots-txt`
   */
  siteUrl: string;
  /**
   * required by `gatsby-plugin-i18n`
   */
  languages: GatsbySiteLanguages;
};
