import { AlignItemsProperty, GapProperty, JustifyContentProperty } from 'csstype';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './cluster.treat';
import { GapProp } from '../props/layout.prop';

type Gap = string;

type Props = CommonComponentProps &
  Partial<{
    gap: GapProp;
    alignItems:
      | [AlignItemsProperty]
      | [AlignItemsProperty, AlignItemsProperty]
      | [AlignItemsProperty, AlignItemsProperty, AlignItemsProperty];
    justifyContent:
      | [JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];
  }>;

export const Cluster: React.FC<Props> = ({
  as,
  className = '',
  gap = '',
  style = {},
  justifyContent = ['space-between'],
  alignItems = ['center'],
  ...props
} = {}) => {
  const { styles } = useStyles(styleRefs);
  const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
  const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;

  return React.createElement(as || 'div', {
    className: `${className || ''} ${styles.wrapper}`,
    style: {
      ...style,
      gap,
      // @ts-ignore
      '--mobile-justify-content': mobileJustifyContent,
      '--tablet-justify-content': tabletJustifyContent || mobileJustifyContent,
      '--desktop-justify-content': desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
      '--mobile-align-items': mobileAlignItems,
      '--tablet-align-items': tabletAlignItems || mobileAlignItems,
      '--desktop-align-items': desktopAlignItems || tabletAlignItems || mobileAlignItems,
    },
    ...props,
  });
};
