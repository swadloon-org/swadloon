import GastbyImage, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getMergedClassname } from '../../utilities/component.utilities';
import { BackgroundEffect, BackgroundEffectConfig } from './background-effect';
import * as styleRefs from './image.treat';

type Props = Omit<CommonComponentProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & { image?: GatsbyImageProps };

export const Image: React.FC<Props> = ({ id, style, className, effects, image, children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.backgroundWrapper]);

  if (image) {
    return (
      <div className={mergedClassNames}>
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
