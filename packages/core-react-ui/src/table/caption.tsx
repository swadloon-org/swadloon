import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './caption.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Caption',
};

export const Caption: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'caption';

  return React.createElement(type, {
    className: `${className || ''} ${styles.caption}
    }`,
    ...props,
  });
});
