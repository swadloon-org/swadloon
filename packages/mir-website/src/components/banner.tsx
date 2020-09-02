import { LABEL } from 'core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import BarSVG from '../illustrations/Illustration/IllustrationBar.svg';
import * as styleRefs from './banner.treat';
import { Heading } from './heading';
import { Label } from './label';

type BannerVariants = 'primary' | 'secondary';

interface OwnProps {
  title?: string;
  subTitle?: string;
  imageUrl?: string;
  variant: BannerVariants;
}

export const Banner: React.FC<OwnProps> = ({ title, subTitle, imageUrl, variant }) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.containerBox}>
      <div className={styles.bluebox}></div>

      <div className={styles.wrapper} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.content}>
          {getVariantTopBar({ variant, subTitle })}

          <Heading variant="h1" className={styles.title}>
            {title || 'Title'}
          </Heading>

          {getVariantBottomBar({ variant })}
        </div>
      </div>

      <div className={styles.blackbox}></div>
    </div>
  );

  function getVariantBottomBar({ variant }: { variant: BannerVariants }) {
    switch (variant) {
      case 'primary': {
        return (
          <div className={styles.containerBarBottomPrimary}>
            <BarSVG viewBox={null} className={styles.bottomBarPrimary} />{' '}
          </div>
        );
      }
      case 'secondary':
      default: {
        return (
          <div className={styles.containerBarBottomSecondary}>
            <BarSVG viewBox={null} className={styles.bottomBarSecondary} />{' '}
          </div>
        );
      }
    }
  }

  function getVariantTopBar({ variant, subTitle }: { variant: BannerVariants; subTitle?: string }) {
    switch (variant) {
      case 'primary': {
        return (
          <div className={styles.containerBarTopPrimary}>
            <Label variant={LABEL.smallBoldUppercase} className={styles.subtitle}>
              {subTitle || 'SubTitle'}
            </Label>

            <BarSVG className={styles.topBarPrimary} />
          </div>
        );
      }
      case 'secondary':
      default: {
        return (
          <div className={styles.containerBarTopSecondary}>
            <BarSVG className={styles.topBarSecondary} />
          </div>
        );
      }
    }
  }
};
