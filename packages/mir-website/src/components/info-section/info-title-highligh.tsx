import React from 'react';
import { Heading } from '../heading';
import { useStyles } from 'react-treat';
import * as styleRefs from './info-section.treat';

type OwnProps = {
  title?: string | null;
  titleHighlight?: string | null;
  className?: string;
};

export const RenderTitleHighlight: React.FC<OwnProps> = ({ title, titleHighlight, className }) => {
  const styles = useStyles(styleRefs);

  return (
    <Heading variant={'h2'} className={`${styles.title} ${className || ''}`}>
      {titleHighlight && title
        ? title.split(' ').map((word, index) =>
            // TODO handle spaces in titleHighlight
            // curriculum vitae
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
