import { FilterProperty, BackgroundPositionProperty } from 'csstype';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as styleRefs from './background-effect.treat';
import BackgroundImage, { IBackgroundImageProps } from 'gatsby-background-image';
import { FilterStyleVariant } from '@newrade/core-design-system';
import { FilterProps, BackgroundPositionProps } from '../../props/background.props';

type Props = CommonComponentProps &
  Partial<IBackgroundImageProps> &
  Partial<{
    filter: FilterProps;
    variantStyle?: FilterStyleVariant;
    backgroundPosition: BackgroundPositionProps;
  }>;

export const Background: React.FC<Props> = ({
  as,
  AsElement,
  className = '',
  filter = [],
  style = {},
  variantStyle,
  backgroundPosition = [],
  ...props
} = {}) => {
  const { styles: styles } = useStyles(styleRefs);
  const [mobileFilter, tabletFilter, desktopFilter] = filter;
  const [mobileBackgroundPosition, tabletBackgroundPosition, desktopBackgroundPosition] = backgroundPosition;

  const type = as ? as : 'div';

  const variantStyleClassName = styles[variantStyle ? variantStyle : FilterStyleVariant.normal];
  const allClassName = `${variantStyleClassName} ${className || ''}`;
  console.log(mobileFilter);

  const WrapperElement = AsElement
    ? React.cloneElement(AsElement as React.ReactElement, {
        style: {
          // @ts-ignore
          '--mobile-filter': mobileFilter,
          '--tablet-filter': tabletFilter || mobileFilter,
          '--desktop-filter': desktopFilter || tabletFilter || mobileFilter,
          '--mobile-background-position': mobileBackgroundPosition,
          '--tablet-background-position': tabletBackgroundPosition || mobileBackgroundPosition,
          '--desktop-background-position':
            desktopBackgroundPosition || tabletBackgroundPosition || mobileBackgroundPosition,
          ...style,
        },
        className: allClassName,

        ...props,
      })
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return React.createElement(type, {
    className: allClassName,
    style: {
      ...style,
      // @ts-ignore
      '--mobile-filter': mobileFilter,
      '--tablet-filter': tabletFilter || mobileFilter,
      '--desktop-filter': desktopFilter || tabletFilter || mobileFilter,
    },
    ...props,
  });
};
