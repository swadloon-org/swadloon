import React from 'react';

import styles from './paragraph.module.scss';

interface OwnProps {
  variant: 'small' | 'medium' | 'large';
}

export const Paragraph: React.FC<OwnProps> = (props) => {
  return <div className={`${styles[props.variant]}`}>{props.children}</div>;
};
