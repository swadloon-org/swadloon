import { BoxV2, CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { BlockImageAPIV1, BlockImageAPIV2 } from '@newrade/core-website-api';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { Image } from '../image/image';
import { BlockProps } from './block.props';

type Props = CommonComponentProps & BlockProps;

export const BlockImage: React.FC<Props> = ({ id, style, className, inView, block, ...props }) => {
  const { theme, cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    localStyle: { width: 'min(100vw, 100%)' },
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
  } else if ((imageBlock as BlockImageAPIV2).media?.media?.fluid) {
    imageData = (imageBlock as BlockImageAPIV2).media?.media?.fluid;
  }

  return (
    <BoxV2 justifySelf={['inherit', 'inherit', 'inherit']} {...commonProps}>
      <Image
        image={{
          Tag: 'div',
          fluid: imageData as FluidObject,
        }}
      ></Image>
    </BoxV2>
  );
};
