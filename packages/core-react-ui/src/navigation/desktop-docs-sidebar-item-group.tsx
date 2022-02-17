import React, { AnchorHTMLAttributes, useState } from 'react';

import { ICON, LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { IconComp } from '../icons/icon';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { getMergedClassname } from '../utilities-iso';

import * as styles from './desktop-docs-sidebar-item-group.css';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'kind' | 'icon' | 'size' | 'linkStyle'> & {
    label?: string;
  };

export const DesktopDocsItemGroup: React.FC<Props> = ({
  id,
  style,
  className,
  as,
  AsElement,
  label,
  ...props
}) => {
  const commonProps = useCommonProps<'div'>({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });
  const [isOpened, setIsOpened] = useState<boolean>(true);

  function handleOnClick(event: React.MouseEvent) {
    setIsOpened(!isOpened);
  }

  return (
    <Stack {...commonProps}>
      <Cluster onClick={handleOnClick} className={styles.group}>
        <Label
          textStyle={TEXT_STYLE.bold}
          variant={LABEL_SIZE.small}
          variantLevel={Variant.primary}
        >
          {label}
        </Label>

        <IconComp
          name={ICON.CHEVRON_DOWN}
          className={getMergedClassname([styles.icon, isOpened && styles.iconOpened])}
        />
      </Cluster>

      {isOpened ? <div className={styles.children}>{props.children}</div> : null}
    </Stack>
  );
};
