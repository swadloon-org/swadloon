import React, { useRef } from 'react';

import { NavbarItemSize } from '@newrade/core-design-system';

import { InputSelectProps } from '../form/input.props.js';
import { InputSelect } from '../form/input-select.js';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom.js';
import { Primitive } from '../primitive/primitive.js';

import { NavbarLinkProps } from './navbar-item.props.js';
import * as styles from './navbar-select-item.css.js';

type Props = NavbarLinkProps & {
  select: InputSelectProps;
};

/**
 * Component that allows user to select a value from a `<select/>` dropdown.
 *
 * @see https://zedesignsystem.com/design-system/components/navbars-items/
 */
export const NavbarSelectItem: React.FC<Props> = ({
  as = 'div',
  AsElement,
  variant,
  size = NavbarItemSize.medium,
  active,
  disabled,
  collapsePadding,
  icon,
  Icon,
  select,
  children,
  ...props
}) => {
  const ref = useRef(null);

  /**
   *
   * Styles
   *
   */

  const classNames = [
    styles.base,
    styles.navbarSelectItem({
      size: size === NavbarItemSize.medium ? 'medium' : 'small',
      padding: collapsePadding,
    }),
  ];

  /**
   *
   * Events Handling
   *
   */

  usePreventPinchZoom(ref.current);

  return (
    <Primitive<'div', HTMLDivElement>
      ref={ref}
      as={as as 'div'}
      style={{}}
      AsElement={AsElement}
      classNames={classNames}
      variant={variant}
      {...props}
    >
      <InputSelect {...select}>{children}</InputSelect>
    </Primitive>
  );
};
