import { LABEL } from '@newrade/core-design-system-old';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import BarSVG from '../../illustrations/IllustrationBar.svg';
import { Heading } from '../ui/heading';
import { Label } from '../ui/label';
import * as styleRefs from './banner-primary.treat';

interface OwnProps {
  title?: string | null;
  subTitle?: string | null;
  imageData?: any;
}

export const BannerPrimary: React.FC<OwnProps> = ({ title, subTitle, imageData }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.bluebox}></div>

      {imageData ? (
        <BackgroundImage Tag="div" fluid={imageData as any} className={`${styles.container}`} fadeIn={false}>
          <div className={styles.content}>
            <div className={styles.containerBarTopPrimary}>
              <Label variant={LABEL.smallBoldUppercase} className={styles.subtitle}>
                {subTitle || 'SubTitle'}
              </Label>

              <BarSVG className={styles.topBarPrimary} />
            </div>

            <Heading variant="h1" className={styles.title}>
              {title || 'Title'}
            </Heading>

            <div className={styles.containerBarBottomPrimary}>
              <BarSVG viewBox={null} className={styles.bottomBarPrimary} />{' '}
            </div>
          </div>
        </BackgroundImage>
      ) : null}

      <div className={styles.blackbox}></div>
    </div>
  );
};
