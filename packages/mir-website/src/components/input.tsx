import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './input.treat';

interface OwnProps {
  variant: 'default' | 'reversed';
  placeholder: string;
}

export const Input: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <input className={`${styles.wrapper} ${styles[props.variant]}`} type="text" placeholder={`${props.placeholder}`} />
  );
};
