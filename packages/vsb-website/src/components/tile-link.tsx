import { HEADING } from '@newrade/core-design-system';
import { Center, Heading } from '@newrade/core-react-ui';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './tile-link.treat';

type OwnProps = SectionFragment;

export const TileLink: React.FC<OwnProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const hasImage = !!props?.medias?.medias?.length;

  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;
  return (
    <div className={`${styles.wrapper}`}>
      {hasImage ? (
        <BackgroundImage Tag="div" fluid={imageData as IFluidObject} className={`${styles.container}`} fadeIn={false}>
          <Center className={styles.content}>
            <Heading variant={HEADING.h2}>{props?.title}</Heading>
          </Center>
        </BackgroundImage>
      ) : null}
    </div>
  );
};
