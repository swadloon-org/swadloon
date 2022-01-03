import React from 'react';
import { useStyles } from 'react-treat';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './icon-box.treat';

type Props = PrimitiveProps<'div'> & {
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
