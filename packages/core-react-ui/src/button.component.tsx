import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './button.treat';

type Props = {};

export function Button(props: React.ButtonHTMLAttributes<any> & Props) {
  const styles = useStyles(styleRefs);

  return (
    <button className={`${styles.baseButton} ${styles.primaryButton}`} {...props}>
      {props.children} hello
    </button>
  );
}
