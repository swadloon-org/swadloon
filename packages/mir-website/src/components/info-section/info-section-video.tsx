import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-video.treat';
import Img from 'gatsby-image';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Video } from '../video';
import { video } from '../video.treat';
import { style } from 'treat/lib/types';

type OwnProps = {
  heading: string;
  paragraph: string;
  imageData: any;
};

export const InfoSectionVideo: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Heading className={styles.title} variant="h2">
            {props.heading}
          </Heading>
          <Paragraph variant="medium">{props.paragraph}</Paragraph>
        </div>
        <div className={styles.content}>
          <Img Tag="div" fluid={props.imageData as any} className={`${styles.video}`} fadeIn={false}></Img>
          {/* <img
            className={styles.video}
            src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1529&q=80"
          ></img> */}
        </div>
      </div>
      <div className={styles.blue}></div>
    </div>
  );
};
