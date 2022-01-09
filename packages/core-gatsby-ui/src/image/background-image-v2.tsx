import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { PrimitiveProps } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';

import { BackgroundEffect, BackgroundEffectConfig } from './background-effect';

import * as styles from './background-image-v2.css';

type Props = Omit<PrimitiveProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & {
  /**
   * For Gatsby fixed or fluid images
   */
  backgroundImage?: IGatsbyImageData;
  /**
   * Useful to adjuste the position of large background image
   */
  backgroundPosition?: string | null;
};

/**
 * Uses gatsby-plugin-image
 */
export const BackgroundImageV2 = React.forwardRef<any, Props>(
  (
    { id, style, className, effects, children, backgroundPosition, backgroundImage, ...props },
    ref
  ) => {
    const mergedClassNames = getMergedClassname([className, styles.wrapper]);

    return (
      <div className={mergedClassNames} ref={ref}>
        <div className={styles.wrapper} ref={ref}>
          {backgroundImage ? (
            <GatsbyImage image={backgroundImage} alt={''} className={styles.image} />
          ) : null}
          <div className={styles.container}>
            {effects?.map((effect, index) => {
              return <BackgroundEffect key={index} effect={effect} />;
            })}
            {children}
          </div>
        </div>
      </div>
    );
  }
);
