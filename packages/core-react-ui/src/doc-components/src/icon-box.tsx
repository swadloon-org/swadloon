import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './icon-box.css.js';

type Props = PrimitiveProps<'div'> & {
  iconName?: string;
};

export const IconBox: React.FC<Props> = ({ id, style, className, iconName, ...props }) => {
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
