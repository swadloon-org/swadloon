import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './table-body.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Tbody',
};

export const TableBody: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'tbody';

  return React.createElement(type, {
    className: `${className || ''} ${styles.tbody}`,
    ...props,
  });
});
