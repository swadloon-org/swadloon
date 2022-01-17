import React, { AnchorHTMLAttributes, useRef } from 'react';

import { LinkProps, TEXT_STYLE } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { getMergedClassname } from '../utilities-components/component.utilities';

import * as styles from './desktop-docs-sidebar-item.css';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    active?: boolean;
  };

export const DesktopDocsSidebarItem: React.FC<Props> = ({
  id,
  style,
  className,
  active,
  as,
  AsElement,
  ...props
}) => {
  const commonProps = useCommonProps<'div'>({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  const ref = useRef<HTMLButtonElement>(null);
  usePreventPinchZoom(ref.current);

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {},
        <div {...commonProps}>
          <Label
            variantStyle={TEXT_STYLE.normal}
            className={getMergedClassname([styles.link, active && styles.linkActive])}
          >
            {props.children}
          </Label>
        </div>
      )
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return (
    <div {...commonProps}>
      <Label
        variantStyle={TEXT_STYLE.normal}
        className={getMergedClassname([styles.link, active && styles.linkActive])}
      >
        {props.children}
      </Label>
    </div>
  );
};
