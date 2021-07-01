import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import {
  AlignItemsViewportProps,
  JustifyContentViewportProps,
  PaddingStringProps,
} from '../props/padding.props';
import * as styleRefs from './box-v3.treat';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Partial<{
    padding: PaddingStringProps;
    alignItems: AlignItemsViewportProps;
    justifyContent: JustifyContentViewportProps;
    justifySelf: JustifyContentViewportProps;
  }>;

export const BoxV3 = React.forwardRef<any, Props>(
  (
    {
      as,
      AsElement,
      style,
      className,
      padding,
      justifyContent = ['space-between'],
      justifySelf = ['inherit'],
      alignItems = ['center'],
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(styleRefs);

    const type = as ? as : 'div';
    const mergedClassName = `${className || ''} ${styles.wrapper}`;
    const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
    const [mobileJustifySelf, tabletJustifySelf, desktopJustifySelf] = justifySelf;
    const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;

    const mergedProps = {
      style: {
        ...style,
        padding: padding
          ?.split(' ')
          .map((paddingValue) => `var(--sizing-${paddingValue})`)
          .join(' '),
        // @ts-ignore
        '--mobile-justify-content': mobileJustifyContent,
        '--tablet-justify-content': tabletJustifyContent || mobileJustifyContent,
        '--desktop-justify-content':
          desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
        '--mobile-justify-self': mobileJustifySelf,
        '--tablet-justify-self': tabletJustifySelf || mobileJustifySelf,
        '--desktop-justify-self': desktopJustifySelf || tabletJustifySelf || mobileJustifySelf,
        '--mobile-align-items': mobileAlignItems,
        '--tablet-align-items': tabletAlignItems || mobileAlignItems,
        '--desktop-align-items': desktopAlignItems || tabletAlignItems || mobileAlignItems,
      },
      className: mergedClassName,
      ...props,
      ref,
    };

    const AsElementClone = AsElement
      ? React.cloneElement(AsElement as React.ReactElement, mergedProps)
      : null;

    if (AsElementClone) {
      return AsElementClone;
    }

    return React.createElement(type, mergedProps);
  }
);
