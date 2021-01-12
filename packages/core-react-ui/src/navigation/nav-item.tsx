import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './nav-item.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { LinkProps, TEXT_STYLE } from '../../../core-design-system/src';
import { Label } from '../components/text/label';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'> & {
    active?: boolean;
  };

export const NavItem: React.FC<Props> = ({ id, style, className, active, AsElement, ...props }) => {
  const { styles } = useStyles(styleRefs);

  const allClassName = `${styles.wrapper} ${active ? styles.active : ''} ${className || ''} `;

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {
          id,
          ...props,
        },
        <div style={style} className={allClassName}>
          <Label>{props.children}</Label>
        </div>
      )
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return (
    <div id={id} style={style} className={allClassName}>
      <Label variantStyle={TEXT_STYLE.normal}>{props.children}</Label>
    </div>
  );
};
