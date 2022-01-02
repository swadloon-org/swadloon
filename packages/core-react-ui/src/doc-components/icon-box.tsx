import React from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps, useCommonProps } from '@newrade/core-react-ui';

import * as stylesRef from './icon-box.treat';

type Props = PrimitiveProps & {
  iconName?: string;
};

export const IconBox: React.FC<Props> = ({ id, style, className, iconName, ...props }) => {
  const { styles } = useStyles(stylesRef);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <div {...commonProps}>
      <div className={styles.icon}>{props.children}</div>
    </div>
  );
};
