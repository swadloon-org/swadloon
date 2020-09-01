import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefsType1 from './info-section-type-6.treat';

import { Button } from '../button';
import { Paragraph } from '../paragraph';
import { SectionModelQuery } from './info-section';
import { RenderTitleHighlight } from './info-title-highligh';
import { Illustration } from '../illustration';
import { Heading } from '../heading';

type OwnProps = {
  type: 'type6Primary' | 'type6Secondary' | 'type6Tertiary';
  icon: string;
  title: string;
  text: string;
};

export const InfoSectionType6: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefsType1);

  return (
    <div className={`${styles.wrapper} ${styles[props.type]}`}>
      <Illustration className={`${styles.illustration}`} name={`Illustration/${props.icon}`} />

      <Heading variant="h4" className={styles.title}>
        {props.title}
      </Heading>
      <Paragraph variant={'small'} className={styles.text}>
        {props.text}
      </Paragraph>
    </div>
  );
};
