import React, { AnchorHTMLAttributes } from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';
import {
  AlignItemsViewportProps,
  JustifyContentViewportProps,
  PaddingProps
} from '../props/padding.props';
import * as styles from './box-v2.css';



type Tag = 'div' | 'section' | 'aside';

type Props = PrimitiveProps<Tag> &
  AnchorHTMLAttributes<any> &
  Partial<{
    padding: PaddingProps;
    alignItems: AlignItemsViewportProps;
    justifyContent: JustifyContentViewportProps;
    justifySelf: JustifyContentViewportProps;
  }>;

/**
 *
 * **********************
 * **********************
 * **                  **
 * **     content      **
 * **                  **
 * **********************
 * **********************
 */
export const BoxV2 = React.forwardRef<any, Props>(
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
    const type = as ? as : 'div';
    const mergedClassName = `${className || ''} ${styles.wrapper}`;
    const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
    const [mobileJustifySelf, tabletJustifySelf, desktopJustifySelf] = justifySelf;
    const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;

    const mergedProps = {
      style: {
        ...style,
        padding: padding?.join(' '),
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
