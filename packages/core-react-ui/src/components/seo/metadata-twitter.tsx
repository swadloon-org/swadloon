import React from 'react';
import { TwitterMetadata } from '../../models/twitter-metadata.model';

type Props = TwitterMetadata;

/**
 * Must be combined with either MetadataOpenGraphWebsite or MetadataOpenGraphArticle
 */
export const MetadataTwitter: React.FC<Props> = ({ card, site, creator, image, imageAlt }) => {
  return (
    <>
      {card ? <meta property="twitter:card" content={card} /> : null}
      {site ? <meta property="twitter:site" content={site} /> : null}
      {creator ? <meta property="twitter:creator" content={creator} /> : null}
      {image ? <meta property="twitter:image" content={image} /> : null}
      {imageAlt ? <meta property="twitter:imageAlt" content={imageAlt} /> : null}
    </>
  );
};
