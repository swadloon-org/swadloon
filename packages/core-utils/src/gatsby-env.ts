import * as t from 'io-ts';
import { TextBoolean } from './boolean-env';

/**
 * Typed representation of the .env file for Gatsby sites.
 */
export const CommonEnvGatsby = t.partial({
  /**
   * Custom variable to enable Gatsby Cloud's incremental build.
   * @see https://www.gatsbyjs.com/blog/2020-04-22-announcing-incremental-builds/
   */
  GATSBY_ENABLE_INCREMENTAL_BUILD: TextBoolean,
  /**
   * @see https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/reference/release-notes/v2.28/index.md
   */
  GATSBY_PRESERVE_WEBPACK_CACHE: TextBoolean,
  GATSBY_PRESERVE_FILE_DOWNLOAD_CACHE: TextBoolean,
  GATSBY_QUERY_ON_DEMAND: TextBoolean,
  GATSBY_LAZY_IMAGES: TextBoolean,
  GATSBY_PARALLEL_SOURCING: TextBoolean,
  GATSBY_DEV_SSR: TextBoolean,
  GATSBY_FAST_DEV: TextBoolean,
  GATSBY_FAST_REFRESH: TextBoolean,
  ENABLE_GATSBY_REFRESH_ENDPOINT: TextBoolean,
});

export type CommonEnvGatsbyType = t.TypeOf<typeof CommonEnvGatsby>;
