import Gatsby from 'gatsby';
import { GatsbySiteMetadata } from './site-metadata';

/**
 * Extends the default Gatsby Config
 * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts for flags
 */
export interface GastbySiteConfig extends Gatsby.GatsbyConfig {
  flags?: {
    DEV_SSR: boolean;
    QUERY_ON_DEMAND: boolean;
    LAZY_IMAGES: boolean;
    PRESERVE_WEBPACK_CACHE: boolean;
    DEV_WEBPACK_CACHE: boolean;
    PRESERVE_FILE_DOWNLOAD_CACHE: boolean;
    PARALLEL_SOURCING: boolean;
    PARALLEL_QUERY_RUNNING: boolean;
    FUNCTIONS: boolean;
    LMDB_STORE: boolean;
  };
  siteMetadata: GatsbySiteMetadata;
}

export const gatsbySiteFlags: GastbySiteConfig['flags'] = {
  DEV_SSR: true,
  QUERY_ON_DEMAND: false,
  LAZY_IMAGES: true,
  PRESERVE_WEBPACK_CACHE: false,
  DEV_WEBPACK_CACHE: false,
  PRESERVE_FILE_DOWNLOAD_CACHE: true,
  PARALLEL_SOURCING: false,
  PARALLEL_QUERY_RUNNING: false,
  FUNCTIONS: false,
  LMDB_STORE: false,
};
