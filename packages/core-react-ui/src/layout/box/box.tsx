import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';
import { CommonComponentProps } from '../../props/component-common-props';
import { TextAlignProperty } from 'csstype';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    padding: string;
    gap: string;
    textAlign: [TextAlignProperty, TextAlignProperty, TextAlignProperty];
  }>;

export const Box: React.FC<OwnProps> = ({
  as = 'div',
  className = '',
  style = {},
  padding = '10px',
  gap = '',
  maxWidthPx = '100px',
  textAlign = ['justify', 'justify', 'justify'],
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  const [mobileTextAlign, tabletTextAlign, desktopTextAlign] = textAlign;

  return React.createElement(
    as,
    { className, style, ...props },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{
        gap: gap,
        padding: padding,
        maxWidth: maxWidthPx,
        // @ts-ignore
        '--mobileTextAlign': mobileTextAlign,
        '--tabletTextAlign': tabletTextAlign,
        '--desktopTextAlign': desktopTextAlign,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
