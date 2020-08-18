import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './anchor-link.treat';

interface OwnProps {
  variant: 'default' | 'reversed';
}

/**
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 */
export const AnchorLink: React.FC<AnchorHTMLAttributes<any> & OwnProps> = (props) => {
  const styles = useStyles(styleRefs);

  return (
    <a className={`${props.className || ''} ${styles.wrapper}`} {...props}>
      {props.children}
    </a>
  );
};
