import React, { HTMLAttributes } from 'react';
import { Illustration } from './illustration';
import { useStyles } from 'react-treat';
import * as styleRefs from './image-frame.treat';
import LazyLoad from 'react-lazyload';

interface OwnProps {
  url: string;
  variant: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props.className || ''} ${styles.wrapper}`}>
      <Illustration
        name={'Illustration/IllustrationSquare'}
        className={`${styles.backgroundIllustration} ${getVariantStyle(props.variant)}`}
        preserveAspectRatio="none"
        width={200}
        height={200}
      />

      <LazyLoad>
        <div className={`${styles.content} ${styles[props.variant]}`}>
          <div className={`${styles.image}`} style={{ backgroundImage: `url(${props.url})` }} />
        </div>
      </LazyLoad>
    </div>
  );

  function getVariantStyle(value: string) {
    switch (value) {
      case 'bottomRight': {
        return styles.topLeft;
      }
      case 'bottomLeft': {
        return styles.topRight;
      }
      case 'topLeft': {
        return styles.bottomRight;
      }
      case 'topRight': {
        return styles.bottomLeft;
      }
      default: {
        return '';
      }
    }
  }
};
