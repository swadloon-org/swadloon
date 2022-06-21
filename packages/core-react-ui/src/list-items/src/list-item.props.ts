import React, { CSSProperties } from 'react';

import { ICON, ListItemProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props.js';

export type ListItemCompProps = PrimitiveProps<'li'> &
  ListItemProps & {
    /**
     * Sets a custom string to be rendered as the ::marker element. Emojis are supported.
     *
     * @example
     * ```html
     * <ul>
     *    <li data-custom-bullet="🎯"><strong>Facilitate</strong> the design phase with clear guidelines on how to use Figma</li>
     *    <li data-custom-bullet="🎯"><strong>Provides</strong> the design phase with clear guidelines on how to use Figma</li>
     * </ul>
     * ```
     */
    ['data-custom-bullet']?: string;
    /**
     * Render an icon as the bullet marker
     */
    Icon?: ICON;
    /**
     * Styles passed to the icon
     */
    IconStyle?: CSSProperties;
    /**
     * Render an svg react node as bullet marker
     */
    IconSVG?: React.ReactNode;
  };
