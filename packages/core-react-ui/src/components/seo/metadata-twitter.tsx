import React from 'react';
import { TwitterMetadata } from '../../models/twitter-metadata.model';

type Props = TwitterMetadata;

/**
 * Must be combined with either MetadataOpenGraphWebsite or MetadataOpenGraphArticle
 * Note: fragments do not work with react-helmet-async
 * see https://github.com/staylor/react-helmet-async/issues/76
 */
export const MetadataTwitterTags: React.FC<Props> = (props) => {
  return <>{getMetadataTwitterTags(props)}</>;
};

export function getMetadataTwitterTags({ card, site, creator, image, imageAlt }: Props) {
  return [
    card ? <meta property="twitter:card" content={card} /> : null,
    site ? <meta property="twitter:site" content={site} /> : null,
    creator ? <meta property="twitter:creator" content={creator} /> : null,
    image ? <meta property="twitter:image" content={image} /> : null,
    imageAlt ? <meta property="twitter:imageAlt" content={imageAlt} /> : null,
  ].map((tag, index) => {
    return tag ? <meta key={index} {...tag.props} /> : null;
  });
}
