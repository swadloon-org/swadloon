import { PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as stylesRef from './table-cell-data.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variant: PARAGRAPH_SIZE.small,
  children: 'Td',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const TableCell: React.FC<Props> = React.memo(
  ({ className, variant, variantStyle, variantLevel, ...props }) => {
    const { styles: styles } = useStyles(stylesRef);

    const type = 'td';

    return React.createElement(type, {
      className: `${className || ''} ${styles.td} ${
        styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)]
      } ${variantStyle ? styles[variantStyle] : ''}`,
      ...props,
    });
  }
);
