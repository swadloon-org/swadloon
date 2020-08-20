/**
 * typed representation of the .env files
 */
export type ENV = { [key: string]: string } & {
  NVM_NODE_VERSION: string;

  MASTER_GIT_HOST: string;
  MASTER_REPO_ORG: string;
  MASTER_REPO_NAME: string;

  PROJECT_GIT_HOST: string;
  PROJECT_REPO_ORG: string;
  PROJECT_REPO_NAME: string;

  FIGMA_TOKEN: string;
};
