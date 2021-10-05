import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as stylesRef from './table.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Table',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
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
