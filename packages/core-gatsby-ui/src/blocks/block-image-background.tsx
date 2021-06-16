import { CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { BlockImageAPIV1, BlockImageAPIV2 } from '@newrade/core-website-api';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { BackgroundImage } from '../image/background-image';
import { BlockProps } from './block.props';

type Props = CommonComponentProps & BlockProps;

export const BlockImageBackground = React.forwardRef<any, Props>(
  ({ id, style, className, inView, block, ...props }, ref) => {
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

    if ((imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0]?.media?.fluid) {
      imageData = (imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0]?.media?.fluid;
      backgroundImagePosition = (imageBlock as BlockImageAPIV1).medias?.[0]?.medias?.[0]
        ?.backgroundPositionY;
    } else if ((imageBlock as BlockImageAPIV2).media?.media?.fluid) {
      imageData = (imageBlock as BlockImageAPIV2).media?.media?.fluid;
      backgroundImagePosition = (imageBlock as BlockImageAPIV2).media?.backgroundPositionY;
    }

    return (
      <BackgroundImage
        ref={ref}
        backgroundPosition={backgroundImagePosition}
        backgroundImage={{
          Tag: 'div',
          fluid: imageData as IFluidObject,
          style: { backgroundPositionY: backgroundImagePosition || '' },
          fadeIn: false,
        }}
        {...commonProps}
      ></BackgroundImage>
    );
  }
);
