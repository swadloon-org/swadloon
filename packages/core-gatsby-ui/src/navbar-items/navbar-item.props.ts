import { NavbarItemProps } from '@newrade/core-design-system';
import { PrimitiveProps } from '@newrade/core-react-ui';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type NavbarHTMLElements = 'a' | 'div';

export type NavbarItemStateProps = {
  /**
   * if the nav item is disabled or not
   */
  disabled?: boolean;
  /**
   * if the nav item is active (e.g. path is matching)
   */
  active?: boolean;
};

export type NavbarLinkProps = PrimitiveProps<'a'> &
  AnchorHTMLAttributes<any> &
  NavbarItemProps &
  NavbarItemStateProps;

export type NavbarButtonProps = PrimitiveProps<'button'> &
  ButtonHTMLAttributes<any> &
  NavbarItemProps &
  NavbarItemStateProps;
