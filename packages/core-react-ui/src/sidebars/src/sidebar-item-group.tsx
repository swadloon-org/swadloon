import React, { AnchorHTMLAttributes } from 'react';

import { LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';

import * as styles from './sidebar-item-group.css.js';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {};

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
        textStyle={TEXT_STYLE.boldUppercase}
        variant={LABEL_SIZE.xSmall}
        variantLevel={Variant.tertiary}
      >
        {props.children}
      </Label>
    </div>
  );
};
