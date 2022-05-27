import { AnchorHTMLAttributes, CSSProperties } from 'react';

import { ButtonProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

export type ButtonAsType = 'button' | 'a' | 'div';

export type ButtonCompProps = PrimitiveProps<ButtonAsType> &
  Pick<AnchorHTMLAttributes<any>, 'href' | 'target' | 'type'> &
  ButtonProps & {
    /**
     * Rendering element types
     */
    as?: ButtonAsType;
    /**
     * Pass custom svg icon
     */
    IconSVG?: React.ReactNode;
    /**
     * Styles applied to the SVG node
     */
    iconStyle?: CSSProperties;
    /**
     * Remove padding on either side which is usefull to align a button's text or icon to a layout.
     */
    collapsePadding?: 'left' | 'right';
  };
