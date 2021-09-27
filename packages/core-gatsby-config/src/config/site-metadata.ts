import { DeployEnvType } from '@newrade/core-utils';
import { GatsbySiteLanguages } from './site-languages';

export type GatsbySiteMetadata = {
  title: string;
  description: string;
  siteEnv: DeployEnvType;
  siteUrl: string;
  siteRepositoryUrl?: string;
  siteVersion?: string;
  siteCopyright?: string;
  languages: GatsbySiteLanguages;
};
