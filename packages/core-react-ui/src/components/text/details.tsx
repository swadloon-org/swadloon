import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './details.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLHeadingElement> & {};

export const Details: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type: keyof React.ReactHTML = 'details';

  return React.createElement(type, {
    className: `${className || ''} ${styles.wrapper}`,
    ...props,
  });
});
