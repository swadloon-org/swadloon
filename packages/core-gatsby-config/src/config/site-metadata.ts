import { DeployEnv } from '@newrade/core-utils';
import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DeployEnv;
  /**
   * required by `gatsby-plugin-i18n`, `gatsby-plugin-robots-txt`
   */
  siteUrl: string;
  /**
   * required by `gatsby-plugin-i18n`
   */
  languages: GatsbySiteLanguages;
};
