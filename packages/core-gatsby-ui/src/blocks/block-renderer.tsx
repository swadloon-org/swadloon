import React from 'react';
import { BlockGoogleMap } from './block-google-map';
import { BlockGoogleMapAPI } from './block-google-map.api';
import { BlockMarkdown } from './block-markdown';
import { BlockAPI } from './block.api';
import { BlockProps, BlockVariant } from './block.props';

type Props = {
  block?: BlockProps | BlockAPI | BlockGoogleMapAPI | null;
};

/**
 * Renders a block according to its variant (type)
 */
export const BlockRenderer: React.FC<Props> = ({ block, ...props }) => {
  switch (block?.variant) {
    case BlockVariant.googleMaps: {
      return <BlockGoogleMap {...(block as BlockGoogleMapAPI)} />;
    }
    default:
    case BlockVariant.text: {
      return <BlockMarkdown>{(block as BlockAPI)?.text?.childMdx.body}</BlockMarkdown>;
    }
  }
};
