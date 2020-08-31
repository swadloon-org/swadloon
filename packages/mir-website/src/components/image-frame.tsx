import React, { HTMLAttributes } from 'react';
import { Illustration } from './illustration';
import { useStyles } from 'react-treat';
import * as styleRefs from './image-frame.treat';

interface OwnProps {
  url: string;
  variant: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props.className || ''} ${styles.wrapper} `}>
      <Illustration
        name={'Illustration/Square'}
        className={`${styles.backgroundIllustration} ${variantResolver(props.variant)}`}
        preserveAspectRatio="none"
        width={null}
        height={null}
      />

      <div className={`${styles.content} ${styles[props.variant]}`}>
        <div className={`${styles.image}`} style={{ backgroundImage: `url(${props.url})` }} />
      </div>
    </div>
  );

  function variantResolver(value: string) {
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
        return null;
      }
    }
  }
};
// ${styles[props.variant]}
