import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './grid.treat';
import { CommonComponentProps } from '../../props/component-common-props';
import { VIEWPORT } from '@newrade/core-design-system';

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    gap: string;
    columns: [number, number, number];
    rows: number;
    cellWidth: string;
  }>;

export const Grid: React.FC<OwnProps> = ({
  className = '',
  style = {},
  as = 'div',
  cellWidth = '1fr',
  columns = [1, 1, 1],
  maxWidthPx = '',
  gap = '0px',
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  const [mobileCol, tabletCol, desktopCol] = columns;

  return React.createElement(
    as,
    { className, style, ...props },
    <div
      className={`${className || ''} ${styles.wrapper}`}
      style={{
        gap,
        maxWidth: maxWidthPx,
        // @ts-ignore
        '--mobileCol': mobileCol,
        '--tabletCol': tabletCol,
        '--desktopCol': desktopCol,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
