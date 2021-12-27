import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './table-row.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Tr',
};

export const TableRow: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'tr';

  return React.createElement(type, {
    className: `${className || ''} ${styles.tr}`,
    ...props,
  });
});
