import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidth: string;
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
  maxWidth = '',
  marginHorizontal = 'auto',
  ...props
} = {}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    {
      className: `${className || ''} ${styles.wrapper}`,
      style: {
        ...style,
        marginTop: marginVerticalTop,
        marginBottom: marginVerticalBottom,
        marginRight: marginHorizontal,
        marginLeft: marginHorizontal,
        maxWidth,
      },
      ...props,
    },
    <>{props.children}</>
  );
};
