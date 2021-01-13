import {
  ButtonProps,
  ButtonState,
  ButtonVariant,
  ButtonStyleVariant,
  ButtonSize,
  ButtonIcon,
} from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './button.treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { pascal, kebab } from 'case';

type Props = CommonComponentProps &
  Pick<ButtonProps, 'icon' | 'role' | 'size' | 'state' | 'variant' | 'variantStyle'> &
  ButtonHTMLAttributes<any> & { as?: 'button' | 'a' | 'div' } & {
    Icon?: React.ReactNode;
  };

export const Button: React.FC<Props> = ({
  id,
  style,
  className,
  variant,
  variantStyle,
  as,
  size,
  state,
  icon,
  Icon,
  ...props
}) => {
  const { styles: styles } = useStyles(stylesRef);

  const IconSvg = Icon ? (
    React.cloneElement(Icon as React.ReactElement, {
      // className: styles.logoMobile,
    })
  ) : (
    // <div className={styles.logoMobile}>Logo</div>
    <IoArrowForwardOutline />
  );

  const type = as ? as : 'button';
  const variantStateClassName = `${styles[ButtonState.rest]}`;
  const variantClassName = `${styles[variant ? variant : ButtonVariant.primary]}`;
  const variantStyleClassName = styles[variantStyle ? variantStyle : ButtonStyleVariant.normal];
  const variantSizeClassName = styles[size ? size : ButtonSize.small];
  const variantIconClassName = styles[icon ? icon : ButtonIcon.none];
  const allClassName = `${variantStateClassName} ${variantStyleClassName} ${variantSizeClassName} ${variantClassName} ${variantIconClassName} ${
    className || ''
  } `;

  // TODO should we use reakti as a base https://reakit.io/docs/button/?

  // return React.createElement(type, {
  //   className: allClassName,
  //   ...props,
  // });

  // const defaultChildrenString = `${button as string} ${pascal(
  //   variant || (defaultProps.variant as string)
  // )} ${pascal(kebab(variantStyle || '') || '')}`;
  // const child = {} ? children : defaultChildrenString;

  return (
    <button id={id} style={style} className={allClassName}>
      {props.children}
      {IconSvg}
      {/* children: child, */}
    </button>
  );
};
