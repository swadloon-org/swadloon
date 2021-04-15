import { LinkProps, TEXT_STYLE } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import * as styleRefs from './desktop-docs-sidebar-item.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    active?: boolean;
  };

export const DesktopDocsSidebarItem: React.FC<Props> = ({ id, style, className, active, AsElement, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper, active && styles.active],
    ...props,
  });

  const ref = useRef<HTMLButtonElement>(null);
  usePreventPinchZoom(ref.current);

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {},
        <div {...commonProps}>
          <Label variantStyle={TEXT_STYLE.normal}>{props.children}</Label>
        </div>
      )
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return (
    <div {...commonProps}>
      <Label variantStyle={TEXT_STYLE.normal}>{props.children}</Label>
    </div>
  );
};
