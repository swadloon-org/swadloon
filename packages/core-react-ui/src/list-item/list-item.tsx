import React, { HTMLAttributes } from 'react';
import { BsDot } from 'react-icons/bs';
import { useStyles } from 'react-treat';

import { LinkProps, PARAGRAPH_SIZE } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';
import { Paragraph } from '../text/paragraph';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';

import * as stylesRef from './list-item.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLLIElement> &
  Pick<LinkProps, 'variantSize' | 'variantLevel'> & {
    variantIcon?: 'bullet' | 'icon' | 'number';
    Icon?: React.ReactNode;
  };

/**
 * @deprecated
 */
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
      <BsDot className={styles.bulletIcon} size={'1.6em'} preserveAspectRatio={`xMinYMin meet`} />
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
        <div className={styles.content}>
          {typeof renderedChildren === 'string' ? (
            <Paragraph variant={variantSize}>{renderedChildren}</Paragraph>
          ) : (
            <>{renderedChildren}</>
          )}
        </div>
      </div>
    );
  }
);
