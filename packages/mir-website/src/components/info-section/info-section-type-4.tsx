import React from 'react';
import { useStyles } from 'react-treat';
import { Link as GatsbyLink } from 'gatsby';

import * as styleRefsType4 from './info-section-type-4.treat';

import { Button } from '../button';
import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { InfoSectionModelQuery } from './info-section';
import { InfoTile } from './info-tile';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = InfoSectionModelQuery;

export const InfoSectionType4: React.FC<OwnProps> = (props) => {
  const hasInfoTiles = !!props?.infoTiles?.length;
  const styles = useStyles(styleRefsType4);

  return (
    <div
      className={`${styles.wrapper} ${props.type ? styles[props.type] : ''} ${hasInfoTiles ? styles.extraPadding : ''}`}
    >
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${styles.image} `} />
      ) : null}

      <RenderTitleHighlight className={styles.title} title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={styles.text}>
        {props.text}
      </Paragraph>

      {hasInfoTiles ? (
        <div className={styles.infoTilesWrapper}>
          {props.infoTiles.map((info, index) => {
            return (
              <InfoTile
                key={index}
                className={styles.infoTile}
                illustration={info.illustration}
                title={info.title}
                text={info.text}
                variant={props.type}
              />
            );
          })}
        </div>
      ) : null}

      {props.link && props.link.type === 'INTERNAL_PAGE' && props.link.page?.route ? (
        <GatsbyLink to={props.link.page?.route}>
          <Button variantType={'primaryReversed'} variant={'text'} size={'medium'}>
            {props.link.label}
          </Button>
        </GatsbyLink>
      ) : props.link && props.link.type === 'EXTERNAL_URL' && props.link.url ? (
        <a href={props.link.url}>
          <Button variantType={'primaryReversed'} variant={'text'} size={'medium'}>
            {props.link.label}
          </Button>
        </a>
      ) : null}
    </div>
  );
};
