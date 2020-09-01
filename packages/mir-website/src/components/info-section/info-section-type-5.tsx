import React from 'react';
import { useStyles } from 'react-treat';
import { ImageFrame } from '../image-frame';
import { InfoSectionCheckLabel } from '../InfoSectionCheckLabel';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import * as styleRefsType5 from './info-section-type-5.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionModelQuery;

export const InfoSectionType5: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const styles = useStyles(styleRefsType5);

  return (
    <div className={`${styles.wrapper} ${styles.type5} ${styles[props.align]}`}>
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image}}`} />
      ) : null}

      <div className={styles.content}>
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        <InfoSectionCheckLabel icon="Check" size="medium">
          25 ans d’expertise
        </InfoSectionCheckLabel>
        <InfoSectionCheckLabel icon="Check" size="medium">
          10 000 emplois disponibles
        </InfoSectionCheckLabel>
        <InfoSectionCheckLabel icon="Check" size="medium">
          1 processus de recrutement efficace
        </InfoSectionCheckLabel>
        <InfoSectionCheckLabel icon="Check" size="medium">
          25 ans d’expertise 10 000 emplois disponibles 1 processus de recrutement efficace Un partenariat d’affaires
          humain
        </InfoSectionCheckLabel>
      </div>
    </div>
  );
};