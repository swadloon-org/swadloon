import React from 'react';

type Props = {};

/**
 * Must be combined with either MetadataOpenGraphWebsite or MetadataOpenGraphArticle
 * Note: fragments do not work with react-helmet-async
 * see https://github.com/staylor/react-helmet-async/issues/76
 */
export const MetaBasicTags: React.FC<Props> = () => {
  return <>{getMetaBasicTags()}</>;
};

export function getMetaBasicTags() {
  return [
    <meta charSet="utf-8" />,
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />,
    <meta name="viewport" content="width=device-width, initial-scale=1" />,
  ].map((tag, index) => {
    return <meta key={index} {...tag.props} />;
  });
}
