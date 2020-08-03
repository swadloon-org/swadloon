import React from 'react';
import { Heading } from './heading';
import styles from './info-section.module.scss';
import { Paragraph } from './paragraph';
import { Button } from './button';
import { InfoTile } from './info-tile';
import { ImageFrame } from './image-frame';

interface OwnProps {
  imageUrl?: string;
  title: string;
  titleHighlight?: string;
  text: string;
  actionText: string;
  infoTiles?: { icon: string; title: string; text: string }[];
  variant: 'default' | 'reversed';
}

export const InfoSection: React.FC<OwnProps> = (props) => {
  const hasInfoTiles = !!props?.infoTiles?.length;

  return (
    <div className={`${styles.wrapper} ${styles[props.variant]} ${hasInfoTiles ? styles.extraPadding : ''}`}>
      {props.imageUrl ? <ImageFrame variant={'bottomLeft'} url={props.imageUrl} className={styles.image} /> : null}

      <Heading variant={'h3'} className={styles.title}>
        {props.titleHighlight
          ? props.title.split(' ').map((word, index) =>
              word === props.titleHighlight ? (
                <span className={styles.titleHighlight}>
                  {index > 0 ? ' ' : ''}
                  {word}
                </span>
              ) : (
                <span>
                  {index > 0 ? ' ' : ''}
                  {word}
                </span>
              )
            )
          : props.title}
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
