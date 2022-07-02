import React, { AnchorHTMLAttributes, useRef } from 'react';

import { LinkProps, TEXT_STYLE } from '@newrade/core-design-system';
import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './sidebar-docs-item.css.js';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {
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
            textStyle={TEXT_STYLE.normal}
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
        textStyle={TEXT_STYLE.normal}
        className={getMergedClassname([styles.link, active && styles.linkActive])}
      >
        {props.children}
      </Label>
    </div>
  );
};
