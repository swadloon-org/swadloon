import React, { AnchorHTMLAttributes, useEffect, useState } from 'react';

import {
  ICON,
  LABEL_SIZE,
  LinkProps,
  TagSize,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import {
  Cluster,
  IconComp,
  Label,
  PrimitiveProps,
  Stack,
  Tag,
  useCommonProps,
} from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities-iso';

import * as styles from './sidebar-docs-desktop-group.css.js';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {
    label?: string;
    count?: number;
    isOpen?: boolean;
    pathname?: string;
    level?: 0 | 1;
  };

export const SidebarDocsDesktopGroup: React.FC<Props> = ({
  id,
  style,
  className,
  as,
  AsElement,
  label,
  count,
  isOpen,
  pathname,
  level = 0,
  ...props
}) => {
  /**
   *
   * Levels
   *
   */

  type LevelStyle = `level${typeof level}`;
  const levelStyle: LevelStyle = `level${level}`;

  const commonProps = useCommonProps<'div'>({
    id,
    style,
    className,
    classNames: [styles[levelStyle]],
    ...props,
  });
  const [localIsOpened, setLocalIsOpened] = useState<boolean | undefined>(undefined);

  function handleOnClick(event: React.MouseEvent) {
    if (!localIsOpened) {
      setLocalIsOpened(true);
      return;
    }

    setLocalIsOpened(!localIsOpened);
  }

  useEffect(() => {
    // override local if parent changes
    setLocalIsOpened(isOpen);
  }, [isOpen, pathname]);

  return (
    <Stack {...commonProps}>
      <Cluster onClick={handleOnClick} className={styles.group} justifyContent={['flex-start']}>
        <IconComp
          name={ICON.CHEVRON_DOWN}
          className={getMergedClassname([styles.icon, localIsOpened ? styles.iconOpened : ''])}
        />

        <Label
          textStyle={TEXT_STYLE.bold}
          variant={LABEL_SIZE.small}
          variantLevel={Variant.primary}
        >
          {label}
        </Label>

        {count ? (
          <Tag variant={Variant.primary} size={TagSize.small}>
            {count.toString()}
          </Tag>
        ) : null}
      </Cluster>

      {localIsOpened ? <div className={styles.children}>{props.children}</div> : null}
    </Stack>
  );
};
