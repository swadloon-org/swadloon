import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './label.treat';

// import styles from './label.module.scss';

interface OwnProps {
  size: 'small' | 'medium' | 'smallBold' | 'mediumBold' | 'smallUppercase' | 'mediumUppercase';
  // variant: 'regular' | 'bold' | 'uppercase';
}

export const Label: React.FC<LabelHTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return <label className={`${props.className || ''} ${styles[props.size]}`}>{props.children}</label>;
};
