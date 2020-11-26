import GatsbyImage, { FluidObject } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionFragment } from '../../../types/graphql-types';
import { Heading } from '../ui/heading';
import { Paragraph } from '../ui/paragraph';
import * as styleRefs from './info-section-video.treat';

type OwnProps = SectionFragment;

export const InfoSectionVideo: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Heading className={styles.title} variant="h2">
            {props.title}
          </Heading>
          <Paragraph variant="medium">{props?.text?.text}</Paragraph>
        </div>
        <div className={styles.content}>
          <GatsbyImage
            className={`${styles.video}`}
            fluid={props?.medias?.medias?.[0]?.desktopFluidImage as FluidObject}
          ></GatsbyImage>
        </div>
      </div>
      <div className={styles.blue}></div>
    </div>
  );
};
