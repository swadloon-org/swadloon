import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './testimonial-section.treat';

import { Heading } from '../heading';
import { Illustration } from '../illustration';
import { Paragraph } from '../paragraph';
import { Label } from '../label';
import { LABEL } from 'core-design-system';
import { style } from 'treat/lib/types';

// type Post = {
//   contentText: string;
//   name: string;
//   job: string;
// };

type OwnProps = {
  title: string;
  // posts: Post[];
};

export const Testimonial: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <Paragraph className={styles.title} variant="medium">
          {props.title}
        </Paragraph>
        <div className={styles.content}>
          {/* {props?.posts.map((post, index) => {
          return (
            <div className={styles.tileComment}>
              <div className={styles.blocContent}>
                <Paragraph variant="medium">{post.contentText}</Paragraph>
                <div className={styles.triangle}></div>
              </div>
              <div className={styles.author}>
                <Label className={styles.name} variant={LABEL.mediumBold}>{post.name}</Label>
                <Label className={styles.job} variant={LABEL.mediumRegular}>{post.job}</Label>
              </div>
            </div>
          );
        })} */}

          <div className={styles.tileComment}>
            <div className={styles.blocContent}>
              <Paragraph variant="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ornare dui. Nunc ultricies non
                elit a porta. Donec tincidunt eu augue eu consectetur. Pellentesque.
              </Paragraph>
              <div className={styles.triangle}></div>
            </div>
            <div className={styles.author}>
              <Label className={styles.name} variant={LABEL.mediumBold}>
                Test
              </Label>
              <Label className={styles.job} variant={LABEL.mediumRegular}>
                Test
              </Label>
            </div>
          </div>

          <div className={styles.tileComment}>
            <div className={styles.blocContent}>
              <Paragraph variant="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ornare dui. Nunc ultricies non
                elit a porta. Donec tincidunt eu augue eu consectetur. Pellentesque.
              </Paragraph>
              <div className={styles.triangle}></div>
            </div>
            <div className={styles.author}>
              <Label className={styles.name} variant={LABEL.mediumBold}>
                Test
              </Label>
              <Label className={styles.job} variant={LABEL.mediumRegular}>
                Test
              </Label>
            </div>
          </div>

          <div className={styles.tileComment}>
            <div className={styles.blocContent}>
              <Paragraph variant="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ornare dui. Nunc ultricies non
                elit a porta. Donec tincidunt eu augue eu consectetur. Pellentesque.
              </Paragraph>
              <div className={styles.triangle}></div>
            </div>
            <div className={styles.author}>
              <Label className={styles.name} variant={LABEL.mediumBold}>
                Test
              </Label>
              <Label className={styles.job} variant={LABEL.mediumRegular}>
                Test
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
