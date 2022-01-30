import React, { AnchorHTMLAttributes, useRef } from 'react';

import { LinkProps, TEXT_STYLE } from '@newrade/core-design-system';
import { Label, PrimitiveProps, useCommonProps, usePreventPinchZoom } from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';

import * as styles from './sidebar-docs-desktop-item.css';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {
    active?: boolean;
    level?: 0 | 1;
  };

export const SidebarDocsDesktopItem: React.FC<Props> = ({
  id,
  style,
  className,
  active,
  level = 0,
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

  /**
   * Levels
   */

  type LevelStyle = `level${typeof level}`;
  const levelStyle: LevelStyle = `level${level}`;

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {},
        <div {...commonProps}>
          <Label
            textStyle={TEXT_STYLE.normal}
            className={getMergedClassname([
              styles.link,
              styles[levelStyle],
              active && styles.linkActive,
            ])}
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
        className={getMergedClassname([
          styles.link,
          styles[levelStyle],
          active && styles.linkActive,
        ])}
      >
        {props.children}
      </Label>
    </div>
  );
};
