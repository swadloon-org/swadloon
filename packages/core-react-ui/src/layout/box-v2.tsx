import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { PaddingProps } from '../props/padding.props';
import * as styleRefs from './box-v2.treat';
import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

type Props = CommonComponentProps &
  Partial<{
    padding?: PaddingProps;
    alignItems:
      | [AlignItemsProperty]
      | [AlignItemsProperty, AlignItemsProperty]
      | [AlignItemsProperty, AlignItemsProperty, AlignItemsProperty];
    justifyContent:
      | [JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];
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
export const BoxV2: React.FC<Props> = ({
  as,
  style,
  className,
  padding,
  justifyContent = ['space-between'],
  alignItems = ['center'],
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  // default to <div></div> element
  const type = as ? as : 'div';
  const mergedClassName = `${className || ''} ${styles.wrapper}`;
  const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
  const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;

  return React.createElement(type, {
    style: {
      ...style,
      padding: padding?.join(' '),
      // @ts-ignore
      '--mobile-justify-content': mobileJustifyContent,
      '--tablet-justify-content': tabletJustifyContent || mobileJustifyContent,
      '--desktop-justify-content': desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
      '--mobile-align-items': mobileAlignItems,
      '--tablet-align-items': tabletAlignItems || mobileAlignItems,
      '--desktop-align-items': desktopAlignItems || tabletAlignItems || mobileAlignItems,
    },

    className: mergedClassName,
    ...props,
  });
};
