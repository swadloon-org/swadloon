import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../../utilities/component.utilities';
import * as stylesRef from './list-items.treat';
import { GapProp } from '../../props/layout.prop';
import { Stack } from '../../layout/stack';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLUListElement | HTMLOListElement> &
  Partial<{
    gap: GapProp;
  }>;

export const ListItems: React.FC<Props> = React.memo(
  ({ id, style, className, as = 'ul', AsElement, children, ...props }) => {
    /**
     * Hooks
     */
    const { styles: styles } = useStyles(stylesRef);

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
      <Stack as={as} id={id} style={style} className={allClassName} {...props}>
        {renderedChildren}
      </Stack>
    );
  }
);
