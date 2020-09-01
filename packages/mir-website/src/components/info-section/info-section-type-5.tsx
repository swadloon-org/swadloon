import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsBase from './info-section.treat';
import * as styleRefsType5 from './info-section-type-5.treat';

import { ImageFrame } from '../image-frame';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
import { InfoSectionCheckLabel } from '../InfoSectionCheckLabel';

type OwnProps = SectionModelQuery;

export const InfoSectionType5: React.FC<OwnProps> = (props) => {
  const hasImage = !!props?.image;
  const hasInfoTiles = !!props?.infoTiles?.length;
  const stylesRef = useStyles(styleRefsType5);
  const stylesBase = useStyles(styleRefsBase);

  return (
    <div
      className={`${stylesBase.wrapper} ${stylesRef.type5} ${
        hasImage || hasInfoTiles ? stylesBase.extraPadding : ''
      }  ${stylesBase[props.align]}`}
    >
      {props.image?.url ? (
        <ImageFrame variant={'bottomRight'} url={props.image?.url} className={`${stylesBase.image}}`} />
      ) : null}

      <div className={stylesRef.content}>
        <RenderTitleHighlight className={stylesRef.title} title={props.title} titleHighlight={props.titleHighlight} />

        <Paragraph variant={'medium'} className={stylesRef.text}>
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
