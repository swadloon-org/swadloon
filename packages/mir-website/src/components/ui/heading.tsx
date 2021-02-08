import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './heading.treat';

interface OwnProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Heading: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  // TODO return <h1/> elements instead of divs

  return <div className={`${props.className || ''} ${props.variant && styles[props.variant]}`}>{props.children}</div>;
};
