import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';

import * as styleRefs from './sidebar-item-group.treat';

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
  const { styles } = useStyles(styleRefs);

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
