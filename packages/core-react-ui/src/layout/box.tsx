import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { TextAlignProperty, WidthProperty } from 'csstype';
import { SIZE } from '@newrade/core-design-system';

type Props = CommonComponentProps &
  Partial<{
    /** */
    padding: string | [string | SIZE, string, string, string];
    gap: string | SIZE;
    textAlign: [TextAlignProperty, TextAlignProperty, TextAlignProperty];
    widthBox: WidthProperty<string>;
  }>;

const defaultProps: Props = {
  as: 'div',
};

export const Box: React.FC<Props> = ({
  as = defaultProps.as,
  style,
  className,
  padding = '',
  gap = '',
  textAlign = ['left', 'left', 'left'],
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  const [mobileTextAlign, tabletTextAlign, desktopTextAlign] = textAlign;
  const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
  const paddingDefault = typeof padding === 'string' ? padding : undefined;

  const mergedClassName = `${className || ''} ${styles.wrapper}`;

  return React.createElement(as || 'div', {
    style: {
      ...style,
      gap,
      padding: paddingDefault ? `${paddingDefault}` : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
      // @ts-ignore
      '--mobileTextAlign': mobileTextAlign,
      '--tabletTextAlign': tabletTextAlign,
      '--desktopTextAlign': desktopTextAlign,
    },
    className: mergedClassName,
    ...props,
  });
};
