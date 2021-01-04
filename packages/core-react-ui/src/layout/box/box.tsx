import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';
import { CommonComponentProps } from '../../props/component-common-props';
import { TextAlignProperty, WidthProperty } from 'csstype';
import { SIZE } from '@newrade/core-design-system';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidth: string;
    padding: string | [string | SIZE, string, string, string];
    gap: string | SIZE;
    textAlign: [TextAlignProperty, TextAlignProperty, TextAlignProperty];
    widthBox: WidthProperty<string>;
  }>;

export const Box: React.FC<OwnProps> = ({
  as = 'div',
  className = '',
  style = {},
  padding = '',
  gap = '',
  maxWidth = '',
  textAlign = ['left', 'left', 'left'],

  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  const [mobileTextAlign, tabletTextAlign, desktopTextAlign] = textAlign;
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
  const paddingDefault = typeof padding === 'string' ? padding : undefined;

  return React.createElement(as, {
    className: `${className || ''} ${styles.wrapper}`,
    style: {
      ...style,
      gap,
      padding: paddingDefault ? `${paddingDefault}` : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
      maxWidth,
      // @ts-ignore
      '--mobileTextAlign': mobileTextAlign,
      '--tabletTextAlign': tabletTextAlign,
      '--desktopTextAlign': desktopTextAlign,
    },
    ...props,
  });
};
