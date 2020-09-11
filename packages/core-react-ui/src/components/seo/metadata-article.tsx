import React from 'react';
import { OpenGraphMetadataBasic } from '../../models/open-graph-metadata.model';

type Props = OpenGraphMetadataBasic;

export const MetadataOpenGraphArticle: React.FC<Props> = ({
  title,
  type,
  url,
  image,
  description,
  site_name,
  locale,
  localeAlternate,
}) => {
  return (
    <>
      <html lang={locale ? locale : 'en_US'} prefix="og: https://ogp.me/ns#" />

      {title ? <meta property="og:title" content={title} /> : null}
      {type ? <meta property="og:type" content={type} /> : null}
      {url ? <meta property="og:url" content={url} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {site_name ? <meta property="og:site_name" content={site_name} /> : null}
      {locale ? <meta property="og:locale" content={locale} /> : null}
      {localeAlternate ? <meta property="og:locale:alternate" content={localeAlternate} /> : null}
    </>
  );
};
