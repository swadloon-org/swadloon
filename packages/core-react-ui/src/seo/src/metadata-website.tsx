import React from 'react';

import { OpenGraphMetadataBasic } from '../models/open-graph-metadata.model';

import { getLangCodeUnderscore } from './meta.utilities';

type Props = OpenGraphMetadataBasic;

/**
 * Must be combined with either MetaBasicTags
 * Note: fragments do not work with react-helmet-async
 * see https://github.com/staylor/react-helmet-async/issues/76
 */
export const MetadataOpenGraphWebsiteTags: React.FC<Props> = (props) => {
  return <>{getMetadataOpenGraphWebsiteTags(props)}</>;
};

export function getMetadataOpenGraphWebsiteTags({
  lang,
  locale,
  title,
  url,
  description,
  type,
  image,
  site_name,
  localeAlternate,
  localeAlternateUrls,
}: Props) {
  return [
    /* eslint-disable react/jsx-key */
    <html lang={lang ? lang : 'en'} prefix="og: https://ogp.me/ns#" />,
    title ? <title>{title}</title> : null,
    url ? <link rel="canonical" href={url} /> : null,
    url ? <meta property="og:url" content={url} /> : null,
    description ? <meta name="description" content={description} /> : null,
    title ? <meta property="og:title" content={title} /> : null,
    type ? <meta property="og:type" content={type} /> : null,
    image ? <meta property="og:image" content={image} /> : null,
    description ? <meta property="og:description" content={description} /> : null,
    site_name ? <meta property="og:site_name" content={site_name} /> : null,
    locale ? <meta property="og:locale" content={locale} /> : null,
    /**
     * @see https://developers.google.com/search/docs/advanced/crawling/localized-versions
     */
    <link rel="alternate" href={url} hrefLang="x-default" />,
    ...(localeAlternateUrls
      ? localeAlternateUrls.map(({ locale, url }) => (
          <link rel="alternate" key={locale} href={url} hrefLang={locale} />
        ))
      : []),
    /**
     * @see https://developers.facebook.com/blog/post/2013/11/11/605/
     */
    ...(localeAlternateUrls
      ? localeAlternateUrls.map(({ locale, url }) => (
          <meta property="og:locale:alternate" content={getLangCodeUnderscore(locale)} />
        ))
      : []),
  ].map((tag, index) => {
    if (tag?.type === 'html') {
      return tag ? <html key={index} {...tag.props} /> : null;
    }

    if (tag?.type === 'title') {
      return tag ? <title key={index} {...tag.props} /> : null;
    }

    if (tag?.type === 'link') {
      return tag ? <link key={index} {...tag.props} /> : null;
    }

    return tag ? <meta key={index} {...tag.props} /> : null;
  });
}
