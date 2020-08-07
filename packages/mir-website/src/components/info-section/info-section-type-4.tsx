import React from 'react';
import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { InfoTile } from './info-tile';
import { RenderTitleHighlight } from './info-title-highligh';
import styles from './info-section.module.scss';

type OwnProps = SectionModelQuery;

export const InfoSectionType4: React.FC<OwnProps> = (props) => {
  const hasInfoTiles = !!props?.infoTiles?.length;

  return (
    <div className={`${styles.wrapper} ${styles[props.type]} ${hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame variant={'bottomLeft'} url={props.image?.url} className={`${styles.image} `} />
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

      <Button type={'primary'} variant={'text'} size={'medium'} variantStyle={'reversed'}>
        {props.actionText}
      </Button>
    </div>
  );
};
