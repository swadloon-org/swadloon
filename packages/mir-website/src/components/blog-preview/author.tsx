import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './author.treat';
import LazyLoad from 'react-lazyload';
import { Label } from '../label';
import { LABEL } from 'core-design-system-old';

interface OwnProps {}

export const Author: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <LazyLoad>
        <div
          className={styles.imageAuthor}
          style={{ backgroundImage: `url(https://media.graphcms.com/resize=fit:max,width:300/Jp9hlNc7RViXEuuSNHIw)` }}
        ></div>
      </LazyLoad>
      <div className={styles.contentText}>
        <Label variant={LABEL.smallBold} className={styles.fullName}>
          Émilie Clarke
        </Label>
        <Label variant={LABEL.smallRegular} className={styles.title}>
          Directrice du développement des affaires
        </Label>
      </div>
    </div>
  );
};
