import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './center.treat';
import { CommonComponentProps } from 'src/props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    marginVerticalTop?: number | 'auto';
    marginVerticalBottom?: number | 'auto';
    marginHorizontal?: number | 'auto';
  }>;

export const LayoutBox: React.FC<OwnProps> = (
  { as, className, marginVerticalTop, marginVerticalBottom, maxWidthPx, marginHorizontal, ...props } = { as: 'div' }
) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className, ...props },
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
