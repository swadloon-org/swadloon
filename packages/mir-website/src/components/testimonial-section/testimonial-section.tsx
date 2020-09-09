import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './testimonial-section.treat';

import { Heading } from '../heading';
import { Illustration } from '../illustration';
import { Paragraph } from '../paragraph';
import { Label } from '../label';
import { LABEL } from 'core-design-system';
import { style } from 'treat/lib/types';
import { Maybe, GraphCms_TestimonialSection, GraphCms_Testimonial } from '../../../types/graphql-types';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

// type Post = {
//   contentText: string;
//   name: string;
//   job: string;
// };

type OwnProps = {
  testimonialSections: Array<
    Pick<GraphCms_TestimonialSection, 'title' | 'titleHighlight' | 'description'> & {
      testomonials: Array<Pick<GraphCms_Testimonial, 'authorName' | 'authorTitle' | 'message' | 'id'>>;
    }
  >;
};
export function Testimonial(props: OwnProps) {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <RenderTitleHighlight
          title={props?.testimonialSections[0].title}
          titleHighlight={props?.testimonialSections[0].titleHighlight}
          className={styles.title}
        ></RenderTitleHighlight>

        <Paragraph className={styles.subTitle} variant="medium">
          {props?.testimonialSections[0].description}
        </Paragraph>
        <div className={styles.content}>
          {props?.testimonialSections[0].testomonials.map((post, index) => {
            return (
              <div className={styles.tileComment} key={post?.id}>
                <div className={styles.blocContent}>
                  <Paragraph variant="medium">{post?.message}</Paragraph>
                  <div className={styles.triangle}></div>
                </div>
                <div className={styles.author}>
                  <Label className={styles.name} variant={LABEL.mediumBold}>
                    {post?.authorName}
                  </Label>
                  <Label className={styles.job} variant={LABEL.mediumRegular}>
                    {post?.authorTitle}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
