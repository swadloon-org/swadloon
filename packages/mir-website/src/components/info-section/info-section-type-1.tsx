import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section-type-1.treat';

import { Button } from '../button';
import { Paragraph } from '../paragraph';
import { InfoSectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';

type OwnProps = Partial<InfoSectionModelQuery>;

export const InfoSectionType1: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.type ? styles[props.type] : ''}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'medium'} className={styles.text}>
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
