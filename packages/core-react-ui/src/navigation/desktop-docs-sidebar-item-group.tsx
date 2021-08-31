import { LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './desktop-docs-sidebar-item-group.treat';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
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
  const { theme, cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);
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
          variantStyle={TEXT_STYLE.bold}
          variant={LABEL_SIZE.small}
          variantLevel={Variant.primary}
        >
          {label}
        </Label>

        <IoChevronDownOutline
          className={getMergedClassname([styles.icon, isOpened && styles.iconOpened])}
        />
      </Cluster>

      {isOpened ? <div className={styles.children}>{props.children}</div> : null}
    </Stack>
  );
};
