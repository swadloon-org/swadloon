import { LABEL_SIZE, LinkProps, TEXT_LEVEL, TEXT_STYLE } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import * as styleRefs from './nav-item-group.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {};

export const NavItemGroup: React.FC<Props> = ({ id, style, className, as, AsElement, ...props }) => {
  const { styles } = useStyles(styleRefs);

  const allClassName = `${styles.wrapper} ${className || ''}`;

  return (
    <div id={id} style={style} className={allClassName}>
      <Label variantStyle={TEXT_STYLE.boldUppercase} variant={LABEL_SIZE.xSmall} variantLevel={TEXT_LEVEL.tertiary}>
        {props.children}
      </Label>
    </div>
  );
};
