import Gatsby from 'gatsby';
import { GatsbySiteMetadata } from './site-metadata';

/**
 * Extends the default Gatsby Config
 */
export interface GastbySiteConfig extends Gatsby.GatsbyConfig {
  flags?: Partial<{
    // @see https://www.gatsbyjs.com/docs/reference/release-notes/v2.29/
    QUERY_ON_DEMAND: boolean;
    LAZY_IMAGES: boolean;
    PARALLEL_SOURCING: boolean;
    // @see https://www.gatsbyjs.com/docs/reference/release-notes/v2.28
    DEV_SSR: boolean;
    FAST_DEV: boolean; // enables DEV_SSR, QUERY_ON_DEMAND and LAZY_IMAGES features
    FAST_REFRESH: boolean;
    PRESERVE_WEBPACK_CACHE: boolean;
    PRESERVE_FILE_DOWNLOAD_CACHE: boolean;
  }>;
  siteMetadata: GatsbySiteMetadata;
}
