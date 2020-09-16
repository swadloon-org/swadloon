import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { Illustration } from '../components/illustration';
import * as styleRefs from './icon.treat';
import { ICON_SIZE } from 'core-design-system';

type OwnProps = {
  icon: string;
  size: ICON_SIZE;
};

export const Icon: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <Illustration className={`${styles.icon} ${styles[props.size]}`} name={`Icon/${props.icon}`}></Illustration>;
};
