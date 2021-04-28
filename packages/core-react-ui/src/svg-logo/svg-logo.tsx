import React, { useRef } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './svg-logo.treat';

type Props = CommonComponentProps & {
  loading?: boolean;
  Icon?: React.ReactNode;
};

export const SVGLogo: React.FC<Props> = React.memo(({ id, style, className, children, as, Icon, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const svgIconRef = useRef();

  const iconClassNames = getMergedClassname([styles.wrapper]);

  const IconSvg = Icon
    ? React.cloneElement(Icon as React.ReactElement, {
        className: iconClassNames,
        preserveAspectRatio: `xMinYMin meet`,
      })
    : null;

  return IconSvg;
});
