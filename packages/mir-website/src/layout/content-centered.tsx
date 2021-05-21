import React from 'react';

import * as styleRefs from './content-centered.treat';
import { useStyles } from 'react-treat';

type OwnProps = {
  reverseOrder?: boolean;
};

export const LayoutCentered: React.FC<OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <div className={`${styles.wrapper} ${props.reverseOrder ? styles.reversed : ''}`}>
      {props.children}
    </div>
  );
};
