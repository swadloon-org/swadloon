import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './grid.treat';
import { CommonComponentProps } from '../../props/component-common-props';

import { useState, useMemo } from 'react';
import useResizeObserver from 'use-resize-observer';
import _ from 'lodash-es';

export function useDebouncedResizeObserver(wait: number) {
  const [size, setSize] = useState<{ width?: number; height?: number }>({});
  const onResize = useMemo(() => _.debounce(setSize, wait, { leading: true }), [wait]);
  const { ref, width = 100, height = 50 } = useResizeObserver({ onResize });

  return { ref, ...size };
}

export function useThrottledResizeObserver(wait: number) {
  const [size, setSize] = useState<{ width?: number; height?: number }>({ width: 1, height: 1 });
  const onResize = useMemo(() => _.throttle(setSize, wait), [wait, size.width]);
  const { ref } = useResizeObserver({
    onResize,
  });

  return { ref, ...size };
}

type OwnProps = CommonComponentProps &
  Partial<{
    maxWidthPx: string;
    gap: string;
    columns: [number, number, number];
    containerQuery: [number, number, number];
    rows: number;
    cellWidth: string;
  }>;

export const Grid: React.FC<OwnProps> = ({
  className = '',
  style = {},
  as = 'div',
  cellWidth = '1fr',
  columns = [1, 1, 1],
  containerQuery = undefined,
  maxWidthPx = '',
  gap = '0px',
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const { ref: ref1, width: widthComponent, height: height1 } = useThrottledResizeObserver(200);
  const [mobileCol, tabletCol, desktopCol] = columns;

  const usesContainerQuery = !!(containerQuery && containerQuery.length);
  const [mobileColContainer, tabletColContainer, desktopColContainer] =
    containerQuery && containerQuery.length ? containerQuery : [1, 1, 1];

  const activeColContainer = widthComponent
    ? widthComponent > mobileColContainer && widthComponent < tabletColContainer
      ? mobileCol
      : widthComponent > tabletColContainer && widthComponent < desktopColContainer
      ? tabletCol
      : widthComponent > desktopColContainer
      ? desktopCol
      : 1
    : 1;

  return React.createElement(
    as,
    {
      ref: ref1,
      className: `${className || ''} ${styles.wrapper} ${usesContainerQuery ? styles.container : styles.viewport}`,
      style: {
        gap,
        maxWidth: maxWidthPx,
        // @ts-ignore
        '--containerCol': usesContainerQuery ? activeColContainer : mobileCol,
        '--mobileCol': mobileCol,
        '--tabletCol': tabletCol,
        '--desktopCol': desktopCol,
      },
      ...props,
    },
    <>{props.children}</>
  );
};
