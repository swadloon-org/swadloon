import { DEPLOY_ENV } from '@newrade/core-utils';
import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DEPLOY_ENV;
  siteUrl: string;
  languages: GatsbySiteLanguages;
};
