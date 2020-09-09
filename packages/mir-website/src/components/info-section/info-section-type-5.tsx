import React from 'react';
import { useStyles } from 'react-treat';
import { ImageFrame } from '../image-frame';
import { CheckLabel } from '../info-section-check';
import { Paragraph } from '../paragraph';
import { InfoSectionModelQuery } from './info-section';
import * as styleRefsType5 from './info-section-type-5.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = InfoSectionModelQuery;

export const InfoSectionType5: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const styles = useStyles(styleRefsType5);

  return (
    <div className={`${styles.wrapper} ${styles.type5} ${props.align ? styles[props.align] : ''}`}>
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image}}`} />
      ) : null}

      <div className={styles.content}>
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        <CheckLabel illustration="IllustrationCheck" size="medium">
          25 ans d’expertise
        </CheckLabel>
        <CheckLabel illustration="IllustrationCheck" size="medium">
          10 000 emplois disponibles
        </CheckLabel>
        <CheckLabel illustration="IllustrationCheck" size="medium">
          1 processus de recrutement efficace
        </CheckLabel>
        <CheckLabel illustration="IllustrationCheck" size="medium">
          25 ans d’expertise 10 000 emplois disponibles 1 processus de recrutement efficace Un partenariat d’affaires
          humain
        </CheckLabel>
      </div>
    </div>
  );
};
