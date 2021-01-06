import { Center, Title } from '@newrade/core-react-ui';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './banner.treat';

type OwnProps = SectionFragment;

export const Banner: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const hasImage = !!props?.medias?.medias?.length;
  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;
  return (
    <div className={`${styles.wrapper}`}>
      {hasImage ? (
        <BackgroundImage Tag="div" fluid={imageData as IFluidObject} className={`${styles.container}`} fadeIn={false}>
          <Center>
            <Title>{props?.title}</Title>
          </Center>
        </BackgroundImage>
      ) : null}
    </div>
  );
};
