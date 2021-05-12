import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Illustration } from './illustration';
import * as styleRefs from './image-frame.treat';

interface OwnProps {
  type?: 'static' | 'caroussel';
  fluid?: FluidObject | null;
  fixed?: FixedObject;
  url?: string;
  variant: 'bottomRight' | 'bottomLeft' | 'topLeft' | 'topRight';
}

export const ImageFrame: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${props?.className || ''} ${styles.wrapper}`}>
      <Illustration
        name={'illustrations/IllustrationSquare'}
        className={`${styles.backgroundIllustration} ${getVariantStyle(props?.variant)}`}
        preserveAspectRatio="none"
        width={200}
        height={200}
      />
      <div className={`${styles.content} ${styles[props?.variant]}`}>
        {props?.fluid ? (
          <GatsbyImage className={`${styles.image}`} fluid={props?.fluid}></GatsbyImage>
        ) : null}
      </div>
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
