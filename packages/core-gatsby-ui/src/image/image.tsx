import { PrimitiveProps } from '@newrade/core-react-ui/src';
import { getMergedClassname } from '@newrade/core-react-ui/src/utilities';
import GastbyImage, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { BackgroundEffect, BackgroundEffectConfig } from './background-effect';
import * as styleRefs from './image.treat';

type Props = Omit<PrimitiveProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & { image?: GatsbyImageProps };

export const Image: React.FC<Props> = ({
  id,
  style,
  className,
  effects,
  image,
  children,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.backgroundWrapper]);

  if (image) {
    return (
      <div id={id} style={style} className={mergedClassNames}>
        {effects?.map((effect, index) => {
          return <BackgroundEffect key={index} effect={effect} />;
        })}

        <GastbyImage {...image} className={styles.container}>
          {children}
        </GastbyImage>
      </div>
    );
  }

  return null;
};
