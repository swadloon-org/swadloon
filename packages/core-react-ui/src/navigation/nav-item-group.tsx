import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './nav-item-group.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { LinkProps, TEXT_STYLE, LABEL_SIZE, TEXT_LEVEL } from '../../../core-design-system/src';
import { Label } from '../components/text/label';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'> & {};

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
