import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsBase from './info-section.treat';

import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
// import styles from './info-section.module.scss';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = SectionModelQuery;

export const InfoSectionType2: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const hasTabs = !!props?.childs.length && props.showTabs;

  const stylesBase = useStyles(styleRefsBase);

  return (
    <div
      className={`${stylesBase.wrapper} ${stylesBase[props.type]} ${
        hasImage || hasInfoTiles ? stylesBase.extraPadding : ''
      }  ${stylesBase[props.align]}`}
    >
      {props.image?.url ? (
        <ImageFrame
          variant={'bottomLeft'}
          url={props.image?.url}
          className={`${stylesBase.image} ${hasTabs ? stylesBase.imageTabs : ''}`}
        />
      ) : null}

      <div className={stylesBase.content}>
        <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={stylesBase.text}>
          {props.text}
        </Paragraph>

        <Button type={'primaryDefault'} variant={'text'} size={'medium'} className={stylesBase.button}>
          {props.actionText}
        </Button>
      </div>
    </div>
  );
};
