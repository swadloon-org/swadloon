import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './paragraph.treat';

interface OwnProps {
  variant: 'small' | 'medium' | 'large';
}

export const Paragraph: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <p className={`${props.className || ''} ${styles[props.variant]}`}>{props.children}</p>;
};
