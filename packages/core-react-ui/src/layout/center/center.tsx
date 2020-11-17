import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    marginVerticalTop?: number | 'auto';
    marginVerticalBottom?: number | 'auto';
    marginHorizontal?: number | 'auto';
  }>;

export const Center: React.FC<OwnProps> = ({
  as,
  className = '',
  style = {},
  marginVerticalTop = '',
  marginVerticalBottom = '',
  maxWidthPx = '',
  marginHorizontal = '',
  ...props
} = {}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className, style, ...props },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{
        marginTop: marginVerticalTop,
        marginBottom: marginVerticalBottom,
        marginRight: marginHorizontal,
        marginLeft: marginHorizontal,
        maxWidth: maxWidthPx,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
