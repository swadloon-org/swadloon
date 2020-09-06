import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './process-section.treat';

import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Label } from '../label';
import { LABEL } from 'core-design-system';
import { style } from 'treat/lib/types';
import { RenderTitleHighlight } from '../info-section/info-title-highligh';

// type Post = {
//   contentText: string;
//   name: string;
//   job: string;
// };

type OwnProps = {
  title: string;
  titleHighlight: string;
  // posts: Post[];
};

export const Process: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />
        <div className={styles.content}>
          <div className={styles.line}></div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Appliquez sur les emplois qui correspondent à votre profil.</Paragraph>
            </div>
          </div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Votre profil sera évalué selon les critères de notre client.</Paragraph>
            </div>
          </div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Appliquez sur les emplois qui correspondent à votre profil.</Paragraph>
            </div>
          </div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Appliquez sur les emplois qui correspondent à votre profil.</Paragraph>
            </div>
          </div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Appliquez sur les emplois qui correspondent à votre profil.</Paragraph>
            </div>
          </div>
          <div className={styles.tileProcess}>
            <div className={styles.blocNumber}>
              <div className={styles.circle}>
                <Label className={styles.number} variant={LABEL.mediumBoldUppercase}>
                  01
                </Label>
              </div>
            </div>
            <div className={styles.blocContent}>
              <Heading variant="h4">Candidature</Heading>
              <Paragraph variant="small">Appliquez sur les emplois qui correspondent à votre profil.</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
