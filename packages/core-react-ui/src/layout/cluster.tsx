import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './cluster.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { AlignItemsProperty, JustifyContentProperty, JustifyItemsProperty, FlexWrapProperty } from 'csstype';
import { SIZE } from '@newrade/core-design-system';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: string | SIZE;
    alignItems: AlignItemsProperty;
    justifyContent:
      | [JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty]
      | [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];
  }>;

export const Cluster: React.FC<OwnProps> = ({
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
      '--mobileJustifyContent': mobileJustifyContent,
      '--tabletJustifyContent': tabletJustifyContent || mobileJustifyContent,
      '--desktopJustifyContent': desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
      '--mobileAlignItems': mobileAlignItems,
      '--tabletAlignItems': tabletAlignItems || mobileAlignItems,
      '--desktopAlignItems': desktopAlignItems || tabletAlignItems || mobileAlignItems,
    },
    ...props,
  });
};
