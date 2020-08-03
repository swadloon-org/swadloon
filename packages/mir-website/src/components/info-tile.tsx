import React from 'react';
import { Heading } from './heading';
import { Illustration } from './illustration';
import styles from './info-tile.module.scss';
import { Paragraph } from './paragraph';

interface OwnProps {
  icon: string;
  title: string;
  text: string;
  variant: 'default' | 'reversed';
}

export const InfoTile: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles[props.variant]}`}>
      <Illustration
        name={'RoundedRectangle'}
        className={`${styles.backgroundIllustration}`}
        preserveAspectRatio="xMidYMid meet"
        width={'100%'}
        height={'100%'}
      />

      <div className={`${styles.content}`}>
        <Illustration className={`${styles.illustration}`} name={props.icon} width={42} height={42} />
        <Heading variant={'h3'}>{props.title}</Heading>
        <Paragraph variant={'small'} className={styles.text}>
          {props.text}
        </Paragraph>
      </div>
    </div>
  );
};
