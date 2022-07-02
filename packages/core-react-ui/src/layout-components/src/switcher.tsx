import React from 'react';

import { PrimitiveProps } from '../primitive/primitive.props.js';
import { GapProp } from '../props/layout.prop.js';
import { AlignItemsViewportProps, JustifyContentViewportProps } from '../props/padding.props.js';

import * as styles from './switcher.css.js';

type Tag = 'div';

type Props = PrimitiveProps<Tag> &
  Partial<{
    gap: GapProp;
    col: number | [number] | [number, number] | [number, number, number];
    direction: number;
    alignItems: AlignItemsViewportProps;
    justifyContent: JustifyContentViewportProps;
    justifySelf: JustifyContentViewportProps;
  }>;

export const Switcher: React.FC<Props> = function Switcher({
  id,
  className,
  style,
  as,
  col,
  gap = ['0px'],
  justifyContent = ['space-between'],
  justifySelf = ['flex-start'],
  alignItems = ['center'],
  ...props
} = {}) {
  const [mobileCol, tabletCol, desktopCol] = col ? (typeof col === 'number' ? [col] : col) : [2];
  const [mobileGap, tabletGap, desktopGap] = gap;
  const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
  const [mobileJustifySelf, tabletJustifySelf, desktopJustifySelf] = justifySelf;
  const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;

  const mergedClassName = `${styles.wrapper} ${className}`;

  const mergedProps = {
    id,
    style: {
      ...style,
      '--mobile-col': mobileCol,
      '--tablet-col': tabletCol || mobileCol,
      '--desktop-col': desktopCol || tabletCol || mobileCol,
      '--mobile-gap': mobileGap,
      '--tablet-gap': tabletGap || mobileGap,
      '--desktop-gap': desktopGap || tabletGap || mobileGap,
      '--mobile-justify-content': mobileJustifyContent,
      '--tablet-justify-content': tabletJustifyContent || mobileJustifyContent,
      '--desktop-justify-content':
        desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
      '--mobile-justify-self': mobileJustifySelf,
      '--tablet-justify-self': tabletJustifySelf || mobileJustifySelf,
      '--desktop-justify-self': desktopJustifySelf || tabletJustifySelf || mobileJustifySelf,
      '--mobile-align-items': mobileAlignItems,
      '--tablet-align-items': tabletAlignItems || mobileAlignItems,
      '--desktop-align-items': desktopAlignItems || tabletAlignItems || mobileAlignItems,
    },
    className: mergedClassName,
    ...props,
  };

  return React.createElement(as || 'div', mergedProps);
};
