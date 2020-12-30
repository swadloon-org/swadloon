import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../types/graphql-types';
import * as styleRefs from './banner.treat';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';

type OwnProps = SectionFragment;

export const Banner: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const hasImage = !!props?.medias?.medias?.length;

  const imageData: any = props?.medias?.medias?.[0]?.desktopFluidImage;
  return (
    <div className={`${styles.wrapper}`}>
      {hasImage ? (
        <BackgroundImage Tag="div" fluid={imageData as IFluidObject} className={`${styles.container}`} fadeIn={false}>
          <div className={styles.content}>
            <h1>{props.title}</h1>
          </div>
        </BackgroundImage>
      ) : null}
    </div>
  );
};
