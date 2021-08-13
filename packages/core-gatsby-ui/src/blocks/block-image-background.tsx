import { PrimitiveProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui/src';
import { BlockImageAPIV1, BlockImageAPIV2 } from '@newrade/core-website-api';
import { IFluidObject } from 'gatsby-background-image';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { BackgroundImage } from '../image/background-image';
import { BackgroundImageV2 } from '../image/background-image-v2';
import { BlockProps } from './block.props';

type Props = PrimitiveProps &
  BlockProps & {
    version?: 'v1' | 'v2';
  };

export const BlockImageBackground = React.forwardRef<any, Props>(
  ({ id, style, className, inView, block, version = 'v1', ...props }, ref) => {
    const { theme, cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({
      id,
      style,
      className,
      ...props,
    });

    if (!block) {
      return null;
    }

    // compatibility between v1 and v2
    const imageBlock = block as BlockImageAPIV2 | BlockImageAPIV1;

    let imageData;
    let backgroundImagePosition;

    const imageBackgroundPositionInBlockV1 = (imageBlock as BlockImageAPIV1).medias?.[0]
      ?.medias?.[0]?.backgroundPositionY;
    const imageDataInBlockV1 = (imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0]?.media;

    // for v1 of the BlockImageAPI
    if (imageDataInBlockV1) {
      if (imageDataInBlockV1.fluid) {
        imageData = imageDataInBlockV1.fluid;
      }
      if (imageDataInBlockV1.fullWidth) {
        imageData = imageDataInBlockV1.fullWidth;
      }
    }

    const imageDataInBlockV2 = (imageBlock as BlockImageAPIV2).media?.media;

    // for v2 of the BlockImageAPI
    if (imageDataInBlockV2) {
      if (imageDataInBlockV2.fluid) {
        imageData = imageDataInBlockV2.fluid;
      }
      if (imageDataInBlockV2.fullWidth) {
        imageData = imageDataInBlockV2.fullWidth;
      }
    }

    if (version === 'v2') {
      return (
        <BackgroundImageV2
          ref={ref}
          backgroundPosition={imageBackgroundPositionInBlockV1}
          backgroundImage={imageData as IGatsbyImageData}
          {...commonProps}
        ></BackgroundImageV2>
      );
    }

    return (
      <BackgroundImage
        ref={ref}
        backgroundPosition={backgroundImagePosition}
        backgroundImage={{
          Tag: 'div',
          fluid: imageData as IFluidObject,
          style: { backgroundPositionY: imageBackgroundPositionInBlockV1 || '' },
          fadeIn: false,
        }}
        {...commonProps}
      ></BackgroundImage>
    );
  }
);
