import React, { HTMLAttributes } from 'react';

import styles from './paragraph.module.scss';

interface OwnProps {
  variant: 'small' | 'medium' | 'large';
}

export const Paragraph: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  return <div className={`${props.className || ''} ${styles[props.variant]}`}>{props.children}</div>;
};
