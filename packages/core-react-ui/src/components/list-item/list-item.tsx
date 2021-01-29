import { LinkProps } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../../utilities/component.utilities';
import * as stylesRef from './list-item.treat';

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
    const wrapperClassNames = getMergedClassname([styles.wrapper, styles.iconWrapper, className]);
    const classNames = getMergedClassname([
      styles.textWrapperIcon,
      variantLevel ? styles[variantLevel] : '',
      variantSize ? styles[variantSize] : styles.small,
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
    const IconSvg = Icon ? (
      React.cloneElement(Icon as React.ReactElement, {
        className: styles.icon,
        preserveAspectRatio: `xMinYMin meet`,
      })
    ) : (
      <div className={styles.bulletIcon}>•</div>
    );

    /**
     * Render
     */
    return React.createElement(
      'li',
      {
        id,
        style,
        className: wrapperClassNames,
        ...props,
      },
      <div className={classNames}>
        {IconSvg}
        <div className={styles.content}>{renderedChildren}</div>
      </div>
    );
  }
);
