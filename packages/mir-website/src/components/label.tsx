import React, { LabelHTMLAttributes } from 'react';

import styles from './label.module.scss';

interface OwnProps {
  size: 'small' | 'medium';
  variant: 'regular' | 'bold' | 'uppercase';
}

export const Label: React.FC<LabelHTMLAttributes<any> & OwnProps> = (props) => {
  return <label className={`${styles[props.size]} ${styles[props.variant]}`}>{props.children}</label>;
};
