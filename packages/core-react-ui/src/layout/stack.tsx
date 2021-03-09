import isEqual from 'lodash/isEqual';
import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { GapProp } from '../props/layout.prop';
import * as styleRefs from './stack.treat';

type Props = CommonComponentProps &
  Partial<{
    gap: GapProp;
  }>;

export const Stack = React.memo(
  React.forwardRef<any, Props>(function Stack({ id, style, className = '', as, gap = ['0px'], ...props } = {}, ref) {
    const { styles } = useStyles(styleRefs);
    const [mobileGap, tabletGap, desktopGap] = gap;

    return React.createElement(as || 'div', {
      id,
      className: `${className || ''} ${styles.wrapper}`,
      style: {
        ...style,
        // @ts-ignore
        '--mobile-gap': mobileGap,
        '--tablet-gap': tabletGap || mobileGap,
        '--desktop-gap': desktopGap || tabletGap || mobileGap,
      },
      ...props,
      ref,
    });
  })
  // areEqual
);

function areEqual(prevProps: Props, nextProps: Props) {
  const previousGap = prevProps.gap;
  const nextGap = nextProps.gap;

  const gapIsEquel = isEqual(previousGap, nextGap);

  return false;
}
