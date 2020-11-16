import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './grid.treat';
import { CommonComponentProps } from '../../props/component-common-props';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx?: string;
    gap?: string;
    columns?: number;
    rows?: number;
    cellWidth?: string;
  }>;

export const Grid: React.FC<OwnProps> = (
  { as, className, cellWidth, columns, maxWidthPx, gap, ...props } = { as: 'div' }
) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className, columns, cellWidth, ...props },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{
        gap: gap,
        maxWidth: maxWidthPx,
        gridTemplateColumns: `repeat(${columns}, ${cellWidth} [col-start])`,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
