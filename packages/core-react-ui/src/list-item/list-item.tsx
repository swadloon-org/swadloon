import { LinkProps, PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { BsDot } from '@react-icons/all-files/bs/BsDot';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
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
    variantSize = PARAGRAPH_SIZE.medium,
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
      <BsDot className={styles.bulletIcon} size={'1.4em'} preserveAspectRatio={`xMinYMin meet`} />
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
