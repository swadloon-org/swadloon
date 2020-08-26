import React, { HTMLAttributes } from 'react';
import { Illustration } from './illustration';
import { useStyles } from 'react-treat';
import * as styleRefs from './image-frame.treat';

interface OwnProps {
  url: string;

  imagePosition: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
  framePosition: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} `}>
      <Illustration
        name={'Illustration/Square'}
        className={`${styles.backgroundIllustration} ${styles[props.framePosition]}`}
        preserveAspectRatio="none"
        width={null}
        height={null}
      />

      <div className={`${styles.content} ${styles[props.imagePosition]}`}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${props.url})` }} />
      </div>
    </div>
  );
};
// ${styles[props.variant]}
