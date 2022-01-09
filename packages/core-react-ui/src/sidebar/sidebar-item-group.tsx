import { LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import * as styles from './sidebar-item-group.css';




type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {};

export const SidebarItemGroup: React.FC<Props> = ({
  id,
  style,
  className,
  as,
  AsElement,
  ...props
}) => {
  const allClassName = `${styles.wrapper} ${className || ''}`;

  return (
    <div id={id} style={style} className={allClassName}>
      <Label
        variantStyle={TEXT_STYLE.boldUppercase}
        variant={LABEL_SIZE.xSmall}
        variantLevel={Variant.tertiary}
      >
        {props.children}
      </Label>
    </div>
  );
};
