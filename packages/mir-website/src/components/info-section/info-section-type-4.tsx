import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsType4 from './info-section-type-4.treat';
// import * as styleRefsBase from './info-section.treat';

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
  const stylesRefs = useStyles(styleRefsType4);
  // const stylesBase = useStyles(styleRefsBase);

  return (
    <div className={`${stylesRefs.wrapper} ${stylesRefs[props.type]} ${hasInfoTiles ? stylesRefs.extraPadding : ''}`}>
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${stylesRefs.image} `} />
      ) : null}

      <RenderTitleHighlight className={stylesRefs.title} title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={stylesRefs.text}>
        {props.text}
      </Paragraph>

      {hasInfoTiles ? (
        <div className={stylesRefs.infoTilesWrapper}>
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
