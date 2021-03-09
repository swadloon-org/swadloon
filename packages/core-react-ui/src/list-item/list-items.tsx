import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { CommonComponentProps } from '../props/component-common.props';
import { GapProp } from '../props/layout.prop';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './list-items.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLUListElement | HTMLOListElement> &
  Partial<{
    gap: GapProp;
  }>;

export const ListItems: React.FC<Props> = React.memo(
  ({ id, style, className, as = 'ul', AsElement, children, gap, ...props }) => {
    /**
     * Hooks
     */
    const { styles } = useStyles(stylesRef);
    const { cssTheme } = useTreatTheme();

    /**
     * Props
     */
    const variantStateClassName = styles.wrapper;
    const allClassName = getMergedClassname([variantStateClassName, className]);

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('link', {
          variant: as,
        });

    /**
     * Render
     */
    return (
      <Stack as={as} id={id} style={style} className={allClassName} gap={gap || [`2em`]} {...props}>
        {renderedChildren}
      </Stack>
    );
  }
);
