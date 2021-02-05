import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './table-body.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Tbody',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const TableBody: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'tbody';

  return React.createElement(type, {
    className: `${className || ''} ${styles.tbody}
    }`,
    ...props,
  });
});
