import { CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { BlockAPI } from '@newrade/core-website-api';
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

    const imageBlock = block as BlockAPI;
    const imageData = imageBlock.medias?.[0]?.medias?.[0]?.media?.fluid;
    const backgroundPosition = imageBlock.medias?.[0]?.medias?.[0]?.backgroundPositionY;

    return (
      <BackgroundImage
        ref={ref}
        backgroundPosition={backgroundPosition}
        backgroundImage={{
          Tag: 'div',
          fluid: imageData as IFluidObject,
          style: { backgroundPositionY: backgroundPosition || '' },
          fadeIn: false,
        }}
        {...commonProps}
      ></BackgroundImage>
    );
  }
);
