import React from 'react';
import { useStyles } from 'react-treat';
import { ImageFrame } from '../image-frame';
import { CheckLabel } from '../info-section-check';
import { Paragraph } from '../paragraph';

import * as styleRefs from './info-section-type-5.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionFragment;

export const InfoSectionType5: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${styles.type5} ${props.align ? styles[props.align] : ''}`}>
      <div className={`${styles.image}}`}>
        {props.image?.url ? (
          <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image}}`} />
        ) : null}
      </div>
      <div className={styles.content}>
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        {props.infoChecks.map((check, index) => {
          return (
            <CheckLabel illustration="IllustrationCheck" size="medium" key={check.id}>
              {check.text}
            </CheckLabel>
          );
        })}
      </div>
    </div>
  );
};
