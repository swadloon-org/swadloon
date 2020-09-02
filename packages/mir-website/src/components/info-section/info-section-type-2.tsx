import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from 'react-treat';
import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { InfoSectionModelQuery } from './info-section';
import * as styleRefsType2 from './info-section-type-2.treat';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = InfoSectionModelQuery;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.childs.length && props.showTabs;

  const styles = useStyles(styleRefsType2);

  return (
    <div
      className={`${styles.wrapper} ${props.type ? styles[props.type] : ''} ${props.align ? styles[props.align] : ''}`}
    >
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} animate="visible" initial="hidden">
        {props.image?.url ? (
          <ImageFrame
            variant={'bottomRight'}
            url={props.image?.url}
            className={`${styles.image} ${hasTabs ? styles.imageTabs : ''}`}
          />
        ) : null}
      </motion.div>

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
