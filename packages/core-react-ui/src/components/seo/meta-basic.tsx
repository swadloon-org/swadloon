import React from 'react';

type Props = {};

/**
 * Must be combined with either MetadataOpenGraphWebsite or MetadataOpenGraphArticle
 */
export const MetaBasic: React.FC<Props> = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </>
  );
};
