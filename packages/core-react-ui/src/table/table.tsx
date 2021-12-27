import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './table.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Table',
};

export const Table: React.FC<Props> = React.memo(({ className, ...props }) => {
  const styles = useStyles(stylesRef);

  const type = 'table';

  const Table = React.createElement(type, {
    className: `${className || ''} ${styles.table}
  }`,
    ...props,
  });

  return <div className={styles.wrapper}>{Table}</div>;
});
