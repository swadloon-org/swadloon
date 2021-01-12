import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './nav-item.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { LinkProps } from '../../../core-design-system/src';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'> & {
    active?: boolean;
  };

export const NavItem: React.FC<Props> = ({ id, style, className, AsElement, ...props }) => {
  const { styles } = useStyles(styleRefs);

  const allClassName = `${styles.wrapper} ${className || ''} `;

  const WrapperElement = AsElement
    ? React.cloneElement(AsElement as React.ReactElement, {
        id,
        style,
        className: allClassName,
        ...props,
      })
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return (
    <div id={id} style={style} className={styles.wrapper}>
      {props.children}
    </div>
  );
};
