import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section.treat';

import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { InfoTile } from './info-tile';
import { RenderTitleHighlight } from './info-title-highligh';
// import styles from './info-section.module.scss';

type OwnProps = SectionModelQuery;

export const InfoSectionType4: React.FC<OwnProps> = (props) => {
  const hasInfoTiles = !!props?.infoTiles?.length;
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${styles[props.type]} ${hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image} `} />
      ) : null}

      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={styles.text}>
        {props.text}
      </Paragraph>

      {hasInfoTiles ? (
        <div className={styles.infoTilesWrapper}>
          {props.infoTiles.map((info, index) => {
            return <InfoTile key={index} icon={info.icon} title={info.title} text={info.text} variant={props.type} />;
          })}
        </div>
      ) : null}

      <Button type={'primaryReversed'} variant={'text'} size={'medium'}>
        {props.actionText}
      </Button>
    </div>
  );
};
