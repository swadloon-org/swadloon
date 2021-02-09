import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './caption.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Caption',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const Caption: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'caption';

  return React.createElement(type, {
    className: `${className || ''} ${styles.caption}
    }`,
    ...props,
  });
});
