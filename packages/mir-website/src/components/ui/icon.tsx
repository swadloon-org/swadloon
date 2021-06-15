import { IconSize } from '@newrade/core-design-system-old';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './icon.treat';
import { Illustration } from './illustration';

type OwnProps = {
  icon: string;
  size: IconSize;
};

export const Icon: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <Illustration
      className={`${styles.icon} ${styles[props.size]}`}
      name={`icons/${props.icon}`}
    ></Illustration>
  );
};
