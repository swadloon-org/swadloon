import { LABEL_SIZE } from '@newrade/core-design-system';
import { Label, Primitive, usePreventPinchZoom } from '@newrade/core-react-ui';
import React, { useRef } from 'react';
import { NavbarLinkProps } from './navbar-item.props';
import * as styles from './navbar-link-item.css';

type Props = NavbarLinkProps;

export const NavbarLinkItem: React.FC<Props> = ({
  active,
  disabled,
  as = 'a',
  AsElement,
  variant,
  variantLevel,
  ...props
}) => {
  const ref = useRef(null);

  /**
   *
   * Styles
   *
   */

  const linkIsExternal = props.href && /https?:\/\//.test(props.href);
  const classNames = [
    styles.base,
    styles.hover,
    styles.medium,
    linkIsExternal && styles.external,
    active ? styles.active : styles.rest,
    disabled && styles.disabled,
  ];

  /**
   *
   * Events Handling
   *
   */

  usePreventPinchZoom(ref.current);

  /**
   *
   * Default children
   *
   */

  const children = props.children ? props.children : 'Link';

  return (
    <Primitive<'a', HTMLAnchorElement>
      ref={ref}
      as={as}
      AsElement={AsElement}
      classNames={classNames}
      target={linkIsExternal ? '_blank' : undefined}
      role={AsElement || as !== 'a' ? 'link' : ''}
      tabIndex={0}
      variant={variantLevel}
      {...props}
    >
      <Label style={{ color: 'inherit' }} variant={LABEL_SIZE.medium}>
        {children}
      </Label>
    </Primitive>
  );
};
