import Gatsby from 'gatsby';

import { GatsbySiteMetadata } from './site-metadata';

/**
 * Extends the default Gatsby Config
 * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts for flags
 * v4 flags: https://v4.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/
 */
export interface GastbySiteConfig extends Gatsby.GatsbyConfig {
  flags?: {
    FAST_DEV: boolean;
    DEV_SSR: boolean;
    PRESERVE_FILE_DOWNLOAD_CACHE: boolean;
    PARALLEL_SOURCING: boolean;
    PARALLEL_QUERY_RUNNING: boolean;
    LMDB_STORE: boolean;
  };
  siteMetadata: GatsbySiteMetadata;
}

export const gatsbySiteFlags: GastbySiteConfig['flags'] = {
  FAST_DEV: true,
  DEV_SSR: true,
  PRESERVE_FILE_DOWNLOAD_CACHE: true,
  PARALLEL_SOURCING: true,
  PARALLEL_QUERY_RUNNING: false, // see https://github.com/gatsbyjs/gatsby/discussions/32389
  LMDB_STORE: true,
};
