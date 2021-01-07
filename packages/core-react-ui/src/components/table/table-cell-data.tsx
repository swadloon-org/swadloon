import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './table-cell-data.treat';
import { PARAGRAPH_SIZE, TEXT_STYLE, TEXT_LEVEL } from '@newrade/core-design-system';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: TEXT_LEVEL;
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
export const Td: React.FC<Props> = React.memo(({ className, variant, variantStyle, variantLevel, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'td';

  return React.createElement(type, {
    className: `${className || ''} ${styles.td} ${
      styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)]
    } ${variantStyle ? styles[variantStyle] : ''}`,
    ...props,
  });
});
