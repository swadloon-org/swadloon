import BackgroundImage, { IBackgroundImageProps } from 'gatsby-background-image';
import React from 'react';
import { useStyles } from 'react-treat';
import { BackgroundPositionProps, FilterProps } from '../../props/background.props';
import { CommonComponentProps } from '../../props/component-common.props';
import * as styleRefs from './background-effect.treat';

type BackgroundEffect = Partial<{
  backgroundColor: string;
  filter: FilterProps;
  zIndex: number;
}>;

type Props = Omit<CommonComponentProps, 'as'> & {
  imageSrc?: string | null;
  effects?: BackgroundEffect[];
} & { backgroundImage?: IBackgroundImageProps; backgroundPosition?: BackgroundPositionProps };

export const Background: React.FC<Props> = ({
  id,
  style,
  className,
  imageSrc,
  effects,
  backgroundImage,
  backgroundPosition,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const [mobileBackgroundPosition, tabletBackgroundPosition, desktopBackgroundPosition] = backgroundPosition
    ? backgroundPosition
    : [, ,];

  if (imageSrc) {
    return (
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={imageSrc} />
      </div>
    );
  }

  if (backgroundImage) {
    return (
      <div className={styles.imgWrapper}>
        <BackgroundImage />
      </div>
    );
  }

  return null;

  // if (imageSrc) return <BackgroundImage></BackgroundImage>;

  // const variantStyleClassName = styles[variantStyle ? variantStyle : FilterStyleVariant.normal];
  // const allClassName = `${variantStyleClassName} ${className || ''}`;

  // const WrapperElement = AsElement
  //   ? React.cloneElement(AsElement as React.ReactElement, {
  //       style: {
  //         // @ts-ignore
  //         '--mobile-filter': mobileFilter,
  //         '--tablet-filter': tabletFilter || mobileFilter,
  //         '--desktop-filter': desktopFilter || tabletFilter || mobileFilter,
  //         '--mobile-background-position': mobileBackgroundPosition,
  //         '--tablet-background-position': tabletBackgroundPosition || mobileBackgroundPosition,
  //         '--desktop-background-position':
  //           desktopBackgroundPosition || tabletBackgroundPosition || mobileBackgroundPosition,
  //         ...style,
  //       },
  //       className: allClassName,

  //       ...props,
  //     })
  //   : null;

  // if (WrapperElement) {
  //   return WrapperElement;
  // }

  // return React.createElement(type, {
  //   className: allClassName,
  //   style: {
  //     ...style,
  //     // @ts-ignore
  //     '--mobile-filter': mobileFilter,
  //     '--tablet-filter': tabletFilter || mobileFilter,
  //     '--desktop-filter': desktopFilter || tabletFilter || mobileFilter,
  //   },
  //   ...props,
  // });
};
