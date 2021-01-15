// TODO for article and other type
// <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
// <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
// <meta property="article:section" content="Article Section" />
// <meta property="article:tag" content="Article Tag" />
// <meta property="fb:admins" content="Facebook numberic ID" />

export enum OPEN_GRAPH_TYPE {
  WEBSITE = 'website',
  ARTICLE = 'article',
}

/**
 * @see https://ogp.me/#metadata
 */
export type OpenGraphMetadataBasic = {
  /**
   * The title of your object as it should appear within the graph, e.g., "The Rock".
   * It should be 50-60 characters long.
   */
  title: string;
  /**
   * The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required.
   */
  type: OPEN_GRAPH_TYPE;
  /**
   * An image URL which should represent your object within the graph. It must be at least 1200 pixels x 627.
   */
  image?: string;
  /**
   * The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/"
   */
  url: string;
  /**
   * A one to two sentence description of your object
   * Max 150-160 characters.
   */
  description: string;
  /**
   * If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
   */
  site_name: string;
  /**
   * The html lang attribute according to https://www.w3.org/International/articles/language-tags/
   * @example fr-CA or fr
   */
  lang: string;
  /**
   * The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US
   * @example fr_CA
   */
  locale: string;
  /**
   * An optional array of other locales this page is available in.
   * @example en_CA
   */
  localeAlternate?: string;
};
