import { Property } from 'csstype';
import React from 'react';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import { GapProp } from '../props/layout.prop';
import * as styles from './cluster.css';

type Gap = string;

type Props = PrimitiveProps<'div' | 'nav' | 'footer'> &
  Partial<{
    wrap?: boolean;
    gap: GapProp;
    alignItems:
      | [Property.AlignItems]
      | [Property.AlignItems, Property.AlignItems]
      | [Property.AlignItems, Property.AlignItems, Property.AlignItems];
    justifyContent:
      | [Property.JustifyContent]
      | [Property.JustifyContent, Property.JustifyContent]
      | [Property.JustifyContent, Property.JustifyContent, Property.JustifyContent];
  }>;

export const Cluster: React.FC<Props> = ({
  id,
  as,
  className = '',
  wrap,
  gap = ['0px'],
  style = {},
  justifyContent = ['space-between'],
  alignItems = ['center'],
  ...props
} = {}) => {
  const [mobileGap, tabletGap, desktopGap] = gap;
  const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;
  const [mobileAlignItems, tabletAlignItems, desktopAlignItems] = alignItems;
  const commonProps = useCommonProps({
    id,
    style: {
      ...style,
      // @ts-ignore
      '--mobile-gap': mobileGap,
      '--tablet-gap': tabletGap || mobileGap,
      '--desktop-gap': desktopGap || tabletGap || mobileGap,
      // @ts-ignore
      '--mobile-justify-content': mobileJustifyContent,
      '--tablet-justify-content': tabletJustifyContent || mobileJustifyContent,
      '--desktop-justify-content':
        desktopJustifyContent || tabletJustifyContent || mobileJustifyContent,
      // @ts-ignore
      '--mobile-align-items': mobileAlignItems,
      '--tablet-align-items': tabletAlignItems || mobileAlignItems,
      '--desktop-align-items': desktopAlignItems || tabletAlignItems || mobileAlignItems,
    },
    className,
    classNames: [styles.wrapper, wrap && styles.wrap],
    ...props,
  });

  return React.createElement(as || 'div', commonProps);
};
