import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../../utilities/component.utilities';
import * as stylesRef from './list-item.treat';
import { LinkProps } from '@newrade/core-design-system';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLLIElement> &
  Pick<LinkProps, 'variantSize' | 'variantLevel'> & {
    variantIcon?: 'bullet' | 'icon' | 'number';
    Icon?: React.ReactNode;
  };

export const ListItem: React.FC<Props> = React.memo(
  ({
    id,
    style,
    className,
    variantIcon = 'bullet',
    variantLevel,
    variantSize,
    Icon,
    as,
    AsElement,
    children,
    ...props
  }) => {
    /**
     * Hooks
     */
    const { styles } = useStyles(stylesRef);

    /**
     * Props
     */
    const variantStateClassName = styles.wrapper;
    const allClassName = getMergedClassname([
      variantStateClassName,
      className,
      variantLevel ? styles[variantLevel] : '',
      variantSize ? styles[variantSize] : styles.small,
      variantIcon === 'icon' ? styles.iconWrapper : '',
    ]);

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('list item', {
          variantIcon,
          variantSize,
        });

    /**
     * Icon insertion
     */
    const IconSvg =
      variantIcon === 'icon' && Icon
        ? React.cloneElement(Icon as React.ReactElement, {
            className: styles.icon,
            preserveAspectRatio: `xMinYMin meet`,
          })
        : null;

    /**
     * Render
     */
    return React.createElement(
      'li',
      {
        id,
        style,
        className: allClassName,
        ...props,
      },
      <>
        {IconSvg}
        {renderedChildren}
      </>
    );
  }
);
