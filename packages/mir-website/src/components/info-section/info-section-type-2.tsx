import React from 'react';
import { useStyles } from 'react-treat';
import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import * as styleRefsType2 from './info-section-type-2.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionModelQuery;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.childs.length && props.showTabs;

  const styles = useStyles(styleRefsType2);

  return (
    <div className={`${styles.wrapper} ${styles[props.type]} ${styles[props.align]}`}>
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomRight'}
          url={props.image?.url}
          className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
        />
      ) : null}

      <div
        className={`${styles.content} ${
          props.align === 'AlignContentLeft' ? styles.alignContentLeft : styles.alignContentRight
        }  `}
      >
        <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={styles.text}>
          {props.text}
        </Paragraph>

        <Button type={'primaryDefault'} variant={'text'} size={'medium'} className={styles.button}>
          {props.actionText}
        </Button>
      </div>
    </div>
  );
};
