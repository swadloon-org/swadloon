import React from 'react';

import styles from './heading.module.scss';

interface OwnProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Heading: React.FC<OwnProps> = (props) => {
  return <div className={`${styles[props.variant]}`}>{props.children}</div>;
};
