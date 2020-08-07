import React from 'react';
import { Heading } from '../heading';
import styles from './info-section.module.scss';

type OwnProps = {
  title?: string;
  titleHighlight?: string;
};

export const RenderTitleHighlight: React.FC<OwnProps> = ({ title, titleHighlight }) => {
  return (
    <Heading variant={'h3'} className={styles.title}>
      {titleHighlight
        ? title.split(' ').map((word, index) =>
            word === titleHighlight ? (
              <span key={`${index}`} className={styles.titleHighlight}>
                {index > 0 ? ' ' : ''}
                {word}
              </span>
            ) : (
              <span key={`${index}`}>
                {index > 0 ? ' ' : ''}
                {word}
              </span>
            )
          )
        : title}
    </Heading>
  );
};
