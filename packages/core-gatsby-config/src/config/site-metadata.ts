import { DeployEnv } from '@newrade/core-utils';
import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DeployEnv;
  siteUrl: string;
  languages: GatsbySiteLanguages;
};
