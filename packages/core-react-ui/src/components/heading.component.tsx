import { TYPOGRAPHIC_STYLE, HEADING_NAME } from 'core-design-system';
import React from 'react';

import { useStyles } from 'react-treat';
import * as styleRefs from './heading.treat';

type Props = {
  style: TYPOGRAPHIC_STYLE;
  variant: HEADING_NAME;
};

export function Heading(props: React.ButtonHTMLAttributes<any> & Props) {
  const styles = useStyles(styleRefs);

  return (
    <button className={`${styles.baseButton} ${styles.primaryButton}`} {...props}>
      {props.children} hello
    </button>
  );
}
