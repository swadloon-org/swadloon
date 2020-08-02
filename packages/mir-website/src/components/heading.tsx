import React, { HTMLAttributes } from 'react';

import styles from './heading.module.scss';

interface OwnProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Heading: React.FC<HTMLAttributes<any> & OwnProps> = (props) => {
  return <div className={`${props.className || ''} ${styles[props.variant]}`}>{props.children}</div>;
};
