import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './button.treat';

export function IconButton(props: React.ButtonHTMLAttributes<any>) {
  const styles = useStyles(styleRefs);

  return (
    <button className={`${styles.baseButton} ${styles.iconButton}`} {...props}>
      {props.children}
    </button>
  );
}
