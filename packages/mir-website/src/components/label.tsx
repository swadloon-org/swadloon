import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './label.treat';
import { LABEL } from 'core-design-system';

enum LABEL_SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  SMALL_BOLD = 'smallBold',
  MEDIUM_BOLD = 'mediumBold',
  SMALL_UPPERCASE = 'smallUppercase',
  MEDIUM_UPPERCASE = 'mediumUppercase',
}

interface OwnProps {
  size2: LABEL;
  size: 'small' | 'medium' | 'smallBold' | 'mediumBold' | 'smallUppercase' | 'mediumUppercase';
  // variant: 'regular' | 'bold' | 'uppercase';
}

export const Label: React.FC<LabelHTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  const reg = /Bold/g;

  console.log(reg.exec(props.size));

  return <label className={`${props.className || ''} ${styles[props.size]}`}>{props.children}</label>;
};
