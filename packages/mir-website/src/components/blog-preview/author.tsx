import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './author.treat';
import LazyLoad from 'react-lazyload';
import { LABEL } from '@newrade/core-design-system-old';
import { Label } from '../ui/label';

type OwnProps = { name: string; title: string; profileImageUrl: string };

export const Author: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <LazyLoad>
        <div className={styles.imageAuthor} style={{ backgroundImage: `url(${props.profileImageUrl})` }}></div>
      </LazyLoad>
      <div className={styles.contentText}>
        <Label variant={LABEL.smallBold} className={styles.fullName}>
          {props.name}
        </Label>
        {props.title ? (
          <Label variant={LABEL.smallRegular} className={styles.title}>
            {props.title}
          </Label>
        ) : null}
      </div>
    </div>
  );
};
