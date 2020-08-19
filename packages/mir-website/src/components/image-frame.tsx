import React, { HTMLAttributes } from 'react';
import { Illustration } from './illustration';
import { useStyles } from 'react-treat';
import * as styleRefs from './image-frame.treat';

interface OwnProps {
  url: string;
  variant: 'bottomRight' | 'bottomLeft';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} ${styles[props.variant]}`}>
      <Illustration
        name={'Illustration/Square'}
        className={`${styles.backgroundIllustration}`}
        preserveAspectRatio="none"
        width={null}
        height={null}
      />

      <div className={styles.content}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${props.url})` }} />
      </div>
    </div>
  );
};
