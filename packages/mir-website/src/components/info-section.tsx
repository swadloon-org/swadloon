import React from 'react';
import { Heading } from './heading';
import styles from './info-section.module.scss';
import { Paragraph } from './paragraph';
import { Button } from './button';
import { InfoTile } from './info-tile';

interface OwnProps {
  title: string;
  text: string;
  actionText: string;
  infoTiles?: { icon: string; title: string; text: string }[];
  variant: 'default' | 'reversed';
}

export const InfoSection: React.FC<OwnProps> = (props) => {
  const hasInfoTiles = !!props?.infoTiles?.length;

  return (
    <div className={`${styles.wrapper} ${styles[props.variant]} ${hasInfoTiles ? styles.extraPadding : ''}`}>
      <Heading variant={'h3'} className={styles.title}>
        {props.title}
      </Heading>

      <Paragraph variant={'small'} className={styles.text}>
        {props.text}
      </Paragraph>

      {hasInfoTiles ? (
        <div className={styles.infoTilesWrapper}>
          {props.infoTiles.map((info, index) => {
            return (
              <InfoTile key={index} icon={info.icon} title={info.title} text={info.text} variant={props.variant} />
            );
          })}
        </div>
      ) : null}

      <Button type="secondary" variant="default" size="medium">
        {props.actionText}
      </Button>
    </div>
  );
};
