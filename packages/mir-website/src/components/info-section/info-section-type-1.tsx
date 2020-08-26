import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsType1 from './info-section-type-1.treat';

import { Button } from '../button';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
// import styles from './info-section.module.scss';

type OwnProps = Partial<SectionModelQuery>;

export const InfoSectionType1: React.FC<OwnProps> = (props) => {
  const stylesRef = useStyles(styleRefsType1);

  return (
    <div className={`${stylesRef.wrapper} ${stylesRef[props.type]}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'small'} className={stylesRef.text}>
        {props.text}
      </Paragraph>

      <Button
        variant={'text'}
        size={'medium'}
        type={props.type === 'type1default' ? 'primaryDefault' : 'primaryReversed'}
      >
        {props.actionText}
      </Button>
    </div>
  );
};
