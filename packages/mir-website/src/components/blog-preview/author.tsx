import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './author.treat';
import LazyLoad from 'react-lazyload';

interface OwnProps {
  url: any;
}

export const Author: React.FC<OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <LazyLoad>
        <div
          className={styles.imageAuthor}
          style={{ backgroundImage: `url(https://media.graphcms.com/resize=fit:max,width:300/Jp9hlNc7RViXEuuSNHIw)` }}
        ></div>
      </LazyLoad>
      <div className={styles.fullName}>Émilie Clarke</div>
      <div className={styles.title}>Directrice du développement des affaires</div>
    </div>
  );
};
