import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './testimonial-section.treat';

import { Heading } from '../heading';
import { Illustration } from '../illustration';
import { Paragraph } from '../paragraph';
import { Label } from '../label';
import { LABEL } from 'core-design-system-old';
import { style } from 'treat/lib/types';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';
import { GraphCms_TestimonialSection, GraphCms_Testimonial } from 'packages/mir-website/types/graphql-types';

type OwnProps = {
  testimonialSections: Pick<GraphCms_TestimonialSection, 'title' | 'titleHighlight' | 'description'> & {
    testomonials: Array<Pick<GraphCms_Testimonial, 'message' | 'authorName' | 'authorTitle'>>;
  };
};
export function Testimonial(props: OwnProps) {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <RenderTitleHighlight
          title={props?.testimonialSections.title}
          titleHighlight={props?.testimonialSections.titleHighlight}
          className={styles.title}
        ></RenderTitleHighlight>

        <Paragraph className={styles.subTitle} variant="medium">
          {props?.testimonialSections.description}
        </Paragraph>
        <div className={styles.content}>
          {props?.testimonialSections.testomonials.map((post, index) => {
            return (
              <div className={styles.tileComment} key={index}>
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
