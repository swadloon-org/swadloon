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

export const Grid: React.FC<OwnProps> = ({
  as,
  className = '',
  cellWidth = '1fr',
  columns = 1,
  maxWidthPx = '',
  gap = '0px',
  ...props
}) => {
  const styles = useStyles(styleRefs);

  console.log(`repeat(${columns}, ${cellWidth} [col-start])`);

  return React.createElement(
    as || 'div',
    { className },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{
        gap,
        maxWidth: maxWidthPx,
        gridTemplateColumns: `repeat(${columns}, ${cellWidth})`,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
