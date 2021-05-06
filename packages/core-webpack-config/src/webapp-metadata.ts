import { DeployEnvType } from '@newrade/core-utils';

export type WebAppMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DeployEnvType;
  siteUrl: string;
  siteRepositoryUrl?: string;
  languages: 'en';
};
