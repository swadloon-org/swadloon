import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './video.treat';
import LazyLoad from 'react-lazyload';

type OwnProps = {
  url: string;
};

export const Video: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <LazyLoad>
        <div className={styles.frame}>
          <div className={`${styles.video}`} style={{ backgroundImage: `url(${props.url})` }} />
        </div>
      </LazyLoad>
    </div>
  );
};
