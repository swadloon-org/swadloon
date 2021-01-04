import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './tile-link.treat';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import { Box, Center, Stack, Cluster } from '@newrade/core-react-ui';

type OwnProps = SectionFragment;

export const TileLink: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);
  const hasImage = !!props?.medias?.medias?.length;

  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;
  return (
    <div className={`${styles.wrapper}`}>
      {hasImage ? (
        <BackgroundImage Tag="div" fluid={imageData as IFluidObject} className={`${styles.container}`} fadeIn={false}>
          <div className={styles.content}>
            <Box maxWidth={'1200px'}>
              <h2>{props?.title}</h2>
            </Box>
          </div>
        </BackgroundImage>
      ) : null}
    </div>
  );
};
