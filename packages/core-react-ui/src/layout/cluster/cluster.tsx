import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './cluster.treat';
import { CommonComponentProps } from '../../props/component-common-props';
import {
  TextAlignProperty,
  AlignItemsProperty,
  JustifyContentProperty,
  AlignContentProperty,
  JustifyItemsProperty,
  FlexWrapProperty,
} from 'csstype';
import { SIZE } from '@newrade/core-design-system';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: string | SIZE;
    alignItems: AlignItemsProperty;
    justifyContent: [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];
    alignContent: [AlignContentProperty, AlignContentProperty, AlignContentProperty];
    justifyItems: JustifyItemsProperty;
    maxWidth: string;
    minWidth: string;
    flexWrap: FlexWrapProperty;
  }>;

export const Cluster: React.FC<OwnProps> = ({
  as,
  className = '',
  gap = '',
  style = {},
  justifyContent = [],
  justifyItems,
  maxWidth,
  minWidth,
  alignItems = [],
  flexWrap,
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
      maxWidth,
      minWidth,
      justifyItems,
      flexWrap,
      // @ts-ignore
      '--mobileJustifyContent': mobileJustifyContent,
      '--tabletJustifyContent': tabletJustifyContent,
      '--desktopJustifyContent': desktopJustifyContent,
      '--mobileAlignItems': mobileAlignItems,
      '--tabletAlignItems': tabletAlignItems,
      '--desktopAlignItems': desktopAlignItems,
    },
    ...props,
  });
};
