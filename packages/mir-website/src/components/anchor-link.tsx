import React, { HTMLAttributes, AnchorHTMLAttributes } from 'react';

import styles from './anchor-link.module.scss';

interface OwnProps {
  variant: 'default' | 'reversed';
}

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 */
export const AnchorLink: React.FC<AnchorHTMLAttributes<any> & OwnProps> = (props) => {
  return <a className={`${props.className || ''} ${styles.wrapper}`}>{props.children}</a>;
};
