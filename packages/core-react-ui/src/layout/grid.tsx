import React from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
// import { useState, useMemo } from 'react';
// import useResizeObserver from 'use-resize-observer';
// import debounce from 'lodash/debounce';
// import throttle from 'lodash/throttle';
import { GapProp, VariantGrid } from '../props/layout.prop';
import * as styleRefs from './grid.treat';

// export function useDebouncedResizeObserver(wait: number) {
//   const [size, setSize] = useState<{ width?: number; height?: number }>({});
//   const onResize = useMemo(() => debounce(setSize, wait, { leading: true }), [wait]);
//   const { ref, width = 100, height = 50 } = useResizeObserver({ onResize });

//   return { ref, ...size };
// }

// export function useThrottledResizeObserver(wait: number) {
//   const [size, setSize] = useState<{ width?: number; height?: number }>({ width: 1, height: 1 });
//   const onResize = useMemo(() => throttle(setSize, wait), [wait, size.width]);
//   const { ref } = useResizeObserver({
//     onResize,
//   });

//   return { ref, ...size };
// }

type OwnProps = PrimitiveProps &
  Partial<{
    variantGrid: VariantGrid;
    gap: GapProp;
    columns: [number, number, number];
    rows: [number, number, number];
    containerQuery: [number, number, number];
  }>;

export const Grid: React.FC<OwnProps> = ({
  className = '',
  variantGrid = 'col',
  style = {},
  as = 'div',
  columns = [],
  rows = [],
  gap = [],
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  const [mobileRows, tabletRows, desktopRows] = rows;
  const [mobileCol, tabletCol, desktopCol] = columns;
  const [mobileGap, tabletGap, desktopGap] = gap;

  return React.createElement(
    as,
    {
      // ref: ref1,
      className: `${className || ''} ${styles.wrapper}
      ${styles[variantGrid]}`,
      style: {
        // @ts-ignore
        '--mobile-gap': mobileGap,
        '--tablet-gap': tabletGap || mobileGap,
        '--desktop-gap': desktopGap || tabletGap || mobileGap,

        '--mobileCol': mobileCol,
        '--tabletCol': tabletCol || mobileCol,
        '--desktopCol': desktopCol || tabletCol || mobileCol,

        '--mobileRows': mobileRows,
        '--tabletRows': tabletRows || mobileRows,
        '--desktopRows': desktopRows || tabletRows || mobileRows,
      },
      ...props,
    },
    <>{props.children}</>
  );
};
