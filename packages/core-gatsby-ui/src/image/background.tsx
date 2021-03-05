import { CommonComponentProps, getMergedClassname, useTreatTheme } from '@newrade/core-react-ui';
import BackgroundImage, { IBackgroundImageProps, InferExtraProps } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { BackgroundEffect, BackgroundEffectConfig } from './background-effect';
import * as styleRefs from './background.treat';

type Props = Omit<CommonComponentProps, 'as'> & {
  effects?: BackgroundEffectConfig[];
} & {
  /**
   * For Gatsby fixed or fluid images
   */
  backgroundImage?: IBackgroundImageProps & InferExtraProps<any>;
  /**
   * Simple img src mode
   */
  src?: string | null;

  backgroundPosition?: string | null;
};

export const Background: React.FC<Props> = ({
  id,
  style,
  className,
  effects,
  children,
  backgroundImage,
  backgroundPosition,
  src,
  ...props
}) => {
  const { cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);
  const mergedClassNames = getMergedClassname([className, styles.backgroundWrapper]);

  return (
    <div className={mergedClassNames}>
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
        <BackgroundImage {...backgroundImage} className={styles.container}>
          {effects?.map((effect, index) => {
            return <BackgroundEffect key={index} effect={effect} />;
          })}
          {children}
        </BackgroundImage>
      )}
    </div>
  );
};
