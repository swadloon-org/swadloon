import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { NavbarItemProps } from '@newrade/core-design-system';
import { PrimitiveProps } from '@newrade/core-react-ui';

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
  /**
   * Offset elements by their padding with negative margins
   * so that their content aligns with page content
   */
  collapsePadding?: 'left' | 'right';
};

export type NavbarLinkProps = PrimitiveProps<'a'> &
  AnchorHTMLAttributes<any> &
  NavbarItemProps &
  NavbarItemStateProps;

export type NavbarButtonProps = PrimitiveProps<'button'> &
  ButtonHTMLAttributes<any> &
  NavbarItemProps &
  NavbarItemStateProps;
