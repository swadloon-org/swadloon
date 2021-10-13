import { LinkProps } from '@newrade/core-design-system';
import { PrimitiveProps } from '@newrade/core-react-ui';
import { AnchorHTMLAttributes } from 'react';

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
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> &
  NavbarItemStateProps;
