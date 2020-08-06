import React from 'react';
import { Heading } from './heading';
import { Illustration } from './illustration';
import styles from './info-tile.module.scss';
import { Paragraph } from './paragraph';
import { GraphCms_InfoTile, Maybe, GraphCms_InfoSectionStyle } from '../../types/graphql-types';

type OwnProps = { variant: Maybe<GraphCms_InfoSectionStyle> } & Pick<GraphCms_InfoTile, 'title' | 'text' | 'icon'>;

export const InfoTile: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles[props.variant]}`}>
      <Illustration
        name={'Illustration/RoundedRectangle'}
        className={`${styles.backgroundIllustration}`}
        preserveAspectRatio="xMidYMid meet"
        width={'100%'}
        height={'100%'}
      />

      <div className={`${styles.content}`}>
        <Illustration className={`${styles.illustration}`} name={`Illustration/${props.icon}`} width={42} height={42} />
        <Heading variant={'h3'}>{props.title}</Heading>
        <Paragraph variant={'small'} className={styles.text}>
          {props.text}
        </Paragraph>
      </div>
    </div>
  );
};
