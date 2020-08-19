import React from 'react';
import { Button } from '../button';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
import styles from './info-section.module.scss';

type OwnProps = Partial<SectionModelQuery>;

export const InfoSectionType1: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles[props.type]}`}>
      <RenderTitleHighlight title={props.title} titleHighlight={props.titleHighlight} />

      <Paragraph variant={'small'} className={styles.text}>
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
