import { LinkProps, TEXT_STYLE } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { Label } from '../components/text/label';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './nav-item.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    active?: boolean;
  };

export const NavItem: React.FC<Props> = ({ id, style, className, active, AsElement, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const ref = useRef<HTMLButtonElement>(null);

  usePreventPinchZoom(ref.current);

  const allClassName = `${styles.wrapper} ${active ? styles.active : ''} ${className || ''} `;

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {
          id,
          ...props,
        },
        <div style={style} className={allClassName}>
          <Label variantStyle={TEXT_STYLE.normal}>{props.children}</Label>
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
