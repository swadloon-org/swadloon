import React, { HTMLAttributes } from 'react';
import { Illustration } from './illustration';
import styles from './image-frame.module.scss';

interface OwnProps {
  url: string;
  variant: 'bottomRight' | 'bottomLeft';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  return (
    <div className={`${props.className || ''} ${styles.wrapper} ${styles[props.variant]}`}>
      <Illustration
        name={'Square'}
        className={`${styles.backgroundIllustration}`}
        viewBox={null}
        preserveAspectRatio=""
        width={null}
        height={null}
      />

      <div className={styles.content}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${props.url})` }} />
      </div>
    </div>
  );
};
