import { AnchorHTMLAttributes } from 'react';

import { ButtonProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

type AsType = 'button' | 'a';

export type ButtonCompProps = PrimitiveProps<AsType> &
  Pick<AnchorHTMLAttributes<any>, 'href' | 'target'> &
  ButtonProps & {
    /**
     * Rendering element types
     */
    as?: 'button' | 'a' | 'div';
    /**
     * Pass custom svg icon
     */
    IconSVG?: React.ReactNode;
    /**
     * Remove padding on either side which is usefull to align a button's text to a layout.
     */
    collapsePadding?: 'left' | 'right';
  };
