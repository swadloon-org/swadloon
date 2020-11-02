import React, { HTMLAttributes } from 'react';

import * as stylesRef from './heading.treat';
import { useStyles } from 'react-treat';

interface OwnProps {
  variant: 'h0' | 'h1' | 'h2' | 'h3' | 'h4';
}

export const Heading: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  // TODO return <h1/> elements instead of divs

  return <div className={`${props.className || ''} ${styles[props.variant]}`}>{props.children}</div>;
};
