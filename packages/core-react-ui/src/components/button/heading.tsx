import React, { HTMLAttributes } from 'react';
import { Typography } from '@newrade/core-design-system';

import * as stylesRef from './heading.treat';
import { useStyles } from 'react-treat';

interface OwnProps {}

export const Heading: React.FC<HTMLAttributes<any> & OwnProps> = ({ className, variant, ...props }) => {
  const styles = useStyles(stylesRef);
  const variantClass = `${variant ? styles[variant] : ''}`;

  return <div className={`${className || ''} ${styles[variant]} `}>{props.children}</div>;
};
