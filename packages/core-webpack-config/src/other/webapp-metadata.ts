import { DeployEnvType } from '@newrade/core-node-utils';

export type WebAppMetadata = Record<string, unknown> & {
  title: string;
  description: string;
  siteEnv: DeployEnvType;
  siteUrl: string;
  siteRepositoryUrl?: string;
  siteVersion?: string;
  languages: 'en';
};
