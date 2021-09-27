import { LABEL_SIZE, LinkProps, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import {
  Cluster,
  Label,
  PrimitiveProps,
  Stack,
  useCommonProps,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { getMergedClassname } from '@newrade/core-react-ui/utilities';
import React, { AnchorHTMLAttributes, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import * as styleRefs from './sidebar-docs-desktop-group.treat';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    label?: string;
  };

export const SidebarDocsDesktopGroup: React.FC<Props> = ({
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
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function handleOnClick(event: React.MouseEvent) {
    setIsOpened(!isOpened);
  }

  return (
    <Stack {...commonProps}>
      <Cluster onClick={handleOnClick} className={styles.group} justifyContent={['flex-start']}>
        <IoChevronDownOutline
          className={getMergedClassname([styles.icon, isOpened && styles.iconOpened])}
        />

        <Label
          variantStyle={TEXT_STYLE.bold}
          variant={LABEL_SIZE.medium}
          variantLevel={Variant.primary}
        >
          {label}
        </Label>
      </Cluster>

      {isOpened ? <div className={styles.children}>{props.children}</div> : null}
    </Stack>
  );
};
