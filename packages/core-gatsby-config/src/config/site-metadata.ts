import { DeployEnvType } from '@newrade/core-utils';
import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DeployEnvType;
  siteUrl: string;
  siteRepositoryUrl?: string;
  languages: GatsbySiteLanguages;
};
