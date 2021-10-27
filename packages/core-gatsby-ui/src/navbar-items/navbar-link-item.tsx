import { ICON, LABEL_SIZE, NavbarItemSize } from '@newrade/core-design-system';
import { IconComp, Label, Primitive, usePreventPinchZoom } from '@newrade/core-react-ui';
import React, { useRef } from 'react';
import { NavbarLinkProps } from './navbar-item.props';
import * as styles from './navbar-link-item.css';

type Props = NavbarLinkProps & {
  SVGLogo?: React.ReactNode;
};

/**
 * @see https://zedesignsystem.com/design-system/components/navbars-items/
 */
export const NavbarLinkItem: React.FC<Props> = ({
  as = 'a',
  AsElement,
  variant,
  size = NavbarItemSize.medium,
  active,
  disabled,
  icon,
  SVGLogo,
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
    styles.navbarItemLink({
      variant: 'primary',
      kind: linkIsExternal ? 'external' : 'normal',
      size: size === NavbarItemSize.medium ? 'medium' : 'small',
      state: disabled ? 'disabled' : active ? 'active' : 'rest',
      hover: disabled ? false : true,
    }),
  ];
  const labelSize = size && size === NavbarItemSize.medium ? LABEL_SIZE.medium : LABEL_SIZE.small;

  /**
   *
   * Events Handling
   *
   */

  usePreventPinchZoom(ref.current);

  /**
   *
   * Logo
   *
   */

  const RenderedLogo = SVGLogo ? <div className={styles.logoWrapper}>{SVGLogo}</div> : null;

  /**
   *
   * Default children
   *
   */

  const children = props.children ? props.children : RenderedLogo ? null : 'Link';

  return (
    <Primitive<'a', HTMLAnchorElement>
      ref={ref}
      as={as}
      AsElement={AsElement}
      classNames={classNames}
      target={linkIsExternal ? '_blank' : undefined}
      role={AsElement || as !== 'a' ? 'link' : ''}
      tabIndex={0}
      variant={variant}
      {...props}
    >
      {RenderedLogo ? null : (
        <Label style={{ color: 'inherit' }} variant={labelSize}>
          {children}
        </Label>
      )}

      {RenderedLogo}

      {icon ? <IconComp name={ICON.OPEN} className={styles.icon} /> : null}
    </Primitive>
  );
};
