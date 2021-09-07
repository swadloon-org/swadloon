import Gatsby from 'gatsby';
import { GatsbySiteMetadata } from './site-metadata';

/**
 * Extends the default Gatsby Config
 * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts for flags
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
  PARALLEL_SOURCING: false,
  PARALLEL_QUERY_RUNNING: false,
  LMDB_STORE: true,
};
