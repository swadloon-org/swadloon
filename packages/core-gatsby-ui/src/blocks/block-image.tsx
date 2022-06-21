import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { CSSProperties } from 'react';

import { BoxV2, PrimitiveProps, useCommonProps } from '@newrade/core-react-ui';
import { BlockImageAPIV1, BlockImageAPIV2 } from '@newrade/core-website-api';

import { BlockProps } from './block.props.js';

type Props = PrimitiveProps & BlockProps;

export const BlockImage: React.FC<Props> = ({ id, style, className, inView, block, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    localStyle: { width: 'min(100vw, 100%)', height: `100%` },
    className,
    ...props,
  });

  if (!block) {
    return null;
  }

  // compatibility between v1 and v2
  const imageBlock = block as BlockImageAPIV2 | BlockImageAPIV1;

  let imageData;
  let imageStyles: CSSProperties = {};

  const mediaInBlockV1 = (imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0];
  const imageDataInBlockV1 = (imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0]?.media;

  // for v1 of the BlockImageAPI
  if (imageDataInBlockV1) {
    if (imageDataInBlockV1.fluid) {
      imageData = imageDataInBlockV1.fluid;
    }
    if (imageDataInBlockV1.constrained) {
      imageData = imageDataInBlockV1.constrained;
    }

    imageStyles = {
      maxWidth: mediaInBlockV1?.maxWidth || '',
    };
  }

  const mediaInBlockV2 = (imageBlock as BlockImageAPIV2).media;
  const imageDataInBlockV2 = (imageBlock as BlockImageAPIV2).media?.media;

  // for v2 of the BlockImageAPI
  if (imageDataInBlockV2) {
    if (imageDataInBlockV2.fluid) {
      imageData = imageDataInBlockV2.fluid;
    }
    if (imageDataInBlockV2.constrained) {
      imageData = imageDataInBlockV2.constrained;
    }

    imageStyles = {
      maxWidth: mediaInBlockV2?.maxWidth || '',
    };
  }

  const mergedProps = { ...commonProps, style: { ...commonProps.style, ...imageStyles } };

  return (
    <BoxV2 justifySelf={['inherit', 'inherit', 'inherit']} {...mergedProps}>
      <GatsbyImage image={imageData as IGatsbyImageData} alt={''}></GatsbyImage>
    </BoxV2>
  );
};
