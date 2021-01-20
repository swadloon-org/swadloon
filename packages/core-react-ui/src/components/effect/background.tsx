import BackgroundImage, { IBackgroundImageProps, InferExtraProps } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getMergedClassname } from '../../utilities/component.utilities';
import { BackgroundEffect, BackgroundEffectConfig } from './background-effect';
import * as styleRefs from './background.treat';

type Props = Omit<CommonComponentProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & { backgroundImage?: IBackgroundImageProps & InferExtraProps<any> };

export const Background: React.FC<Props> = ({ id, style, className, effects, backgroundImage, children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.backgroundWrapper]);

  if (backgroundImage) {
    return (
      <div className={mergedClassNames}>
        <BackgroundImage {...backgroundImage} className={styles.container}>
          {effects?.map((effect, index) => {
            return <BackgroundEffect key={index} effect={effect} />;
          })}
          <div style={{ zIndex: 1 }}>{children}</div>
        </BackgroundImage>
      </div>
    );
  }

  return null;
};
