import GatsbyBackgroundImage, {
  IBackgroundImageProps,
  InferExtraProps,
} from 'gatsby-background-image';
import React from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities-iso';

import { BackgroundEffect, BackgroundEffectConfig } from './background-effect.js';
import * as styles from './background-image.css.js';

type Props = Omit<PrimitiveProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & {
  /**
   * Simple img src mode
   */
  src?: string | null;
  /**
   * For Gatsby fixed or fluid images
   */
  backgroundImage?: IBackgroundImageProps & InferExtraProps<any>;
  /**
   * Useful to adjuste the position of large background image
   */
  backgroundPosition?: string | null;
};

export const BackgroundImage = React.forwardRef<any, Props>(
  (
    { id, style, className, effects, children, backgroundImage, backgroundPosition, src, ...props },
    ref
  ) => {
    const mergedClassNames = getMergedClassname([className, styles.wrapper]);

    return (
      <div className={mergedClassNames} ref={ref}>
        {src ? (
          <div
            className={styles.container}
            style={{
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative',
              backgroundPositionY: backgroundPosition || '50%',
              backgroundImage: `url(${src})`,
            }}
          >
            {effects?.map((effect, index) => {
              return <BackgroundEffect key={index} effect={effect} />;
            })}
            {children}
          </div>
        ) : (
          <GatsbyBackgroundImage {...backgroundImage} className={styles.container}>
            {effects?.map((effect, index) => {
              return <BackgroundEffect key={index} effect={effect} />;
            })}
            {children}
          </GatsbyBackgroundImage>
        )}
      </div>
    );
  }
);
