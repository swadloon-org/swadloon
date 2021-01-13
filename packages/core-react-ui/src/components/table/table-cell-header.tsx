import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './table-cell-header.treat';
import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & { variantStyle?: TEXT_STYLE; variant?: LABEL_SIZE };

const defaultProps: Props = {
  variant: LABEL_SIZE.small,
  children: 'Th',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const TableCellHeader: React.FC<Props> = React.memo(({ className, variantStyle, variant, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = 'th';
  const variantClassName = `${variant ? styles[variant as LABEL_SIZE] : styles[defaultProps.variant as LABEL_SIZE]}`;

  return React.createElement(type, {
    className: `${styles.th} ${className || ''}`,
    ...props,
    children: <div className={`${variantClassName} ${variantStyle ? styles[variantStyle] : ''}`}>{props.children}</div>,
  });
});
