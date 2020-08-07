import React from 'react';
import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import styles from './info-section.module.scss';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionModelQuery;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.childs.length && props.showTabs;

  return (
    <div className={`${styles.wrapper} ${styles[props.type]} ${hasImage || hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomLeft'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      <div className={styles.content}>
        <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        <Button type={'primary'} variant={'text'} size={'medium'} variantStyle={'default'} className={styles.button}>
          {props.actionText}
        </Button>
      </div>
    </div>
  );
};
