import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { BannerQuery } from '../../types/graphql-types';
import { Heading } from './heading';
import { Label } from './label';
import styles from './banner.module.scss';

import BarSVG from '../illustrations/Illustration/Bar.svg';

export const query = graphql`
  query banner {
    gcms {
      pageIndices {
        bannerTitle
        bannerSubTitle
        bannerImage {
          url
        }
      }
    }
  }
`;

interface OwnProps {}

export const Banner: React.FC<OwnProps> = () => {
  const data = useStaticQuery<BannerQuery>(query);

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${data.gcms.pageIndices[0].bannerImage[0].url})` }}>
      <Label size="medium" variant="uppercase" className={styles.subtitle}>
        {data.gcms.pageIndices[0].bannerSubTitle}
      </Label>

      <BarSVG />

      <Heading variant="h2" className={styles.title}>
        {data.gcms.pageIndices[0].bannerTitle}
      </Heading>

      <BarSVG viewBox={null} className={styles.bottomBar} />
    </div>
  );
};
