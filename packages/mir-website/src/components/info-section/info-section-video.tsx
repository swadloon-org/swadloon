import React from 'react';
import { useStyles } from 'react-treat';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import * as styleRefs from './info-section-video.treat';

type OwnProps = {};

export const InfoSectionVideo: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Heading className={styles.title} variant="h2">
            Rencontrez notre équipe
          </Heading>
          <Paragraph variant="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator accumsan, metus ultrices eleifend
            gravi.
          </Paragraph>
        </div>
        <div className={styles.content}>
          <img
            className={styles.video}
            src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1529&q=80"
          ></img>
        </div>
      </div>
      <div className={styles.blue}></div>
    </div>
  );
};
