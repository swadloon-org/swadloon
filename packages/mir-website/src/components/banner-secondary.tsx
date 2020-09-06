import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { ImageSharpFluid } from '../../types/graphql-types';
import BarSVG from '../illustrations/Illustration/IllustrationBar.svg';
import * as styleRefs from './banner-secondary.treat';
import { Heading } from './heading';

interface OwnProps {
  title?: string | null;
  subTitle?: string | null;
  imageData?:
    | Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
    | null
    | undefined;
}

export const BannerSecondary: React.FC<OwnProps> = ({ title, imageData }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} `}>
      <div className={styles.bluebox}></div>

      {imageData ? (
        <BackgroundImage Tag="div" fluid={imageData as any} className={`${styles.container}`} fadeIn={false}>
          <div className={styles.content}>
            <div className={styles.containerBarTopSecondary}>
              <BarSVG className={styles.topBarSecondary} />
            </div>

            <Heading variant="h1" className={styles.title}>
              {title || 'Title'}
            </Heading>

            <div className={styles.containerBarBottomSecondary}>
              <BarSVG viewBox={null} className={styles.bottomBarSecondary} />{' '}
            </div>
          </div>
        </BackgroundImage>
      ) : null}

      <div className={styles.blackbox}></div>
    </div>
  );
};
