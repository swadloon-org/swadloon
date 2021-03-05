import { BoxV2, CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { BlockAPI } from '../api/block.api';
import { Image } from '../image/image';
import { BlockProps } from './block.props';

type Props = CommonComponentProps & BlockProps;

export const BlockImage: React.FC<Props> = ({ id, style, className, block, ...props }) => {
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

  const imageBlock = block as BlockAPI;
  const image = imageBlock.medias?.[0]?.medias?.[0]?.media;

  return (
    <BoxV2 justifySelf={['inherit', 'inherit', 'inherit']} {...commonProps}>
      <Image
        image={{
          Tag: 'div',
          fluid: (image as any)?.fluid as FluidObject,
        }}
      ></Image>
    </BoxV2>
  );
};
