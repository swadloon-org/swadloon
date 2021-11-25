import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { LinkProps, PARAGRAPH_SIZE } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';
import { Paragraph } from '../text/paragraph';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';

import * as stylesRef from './list-item-v2.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLLIElement> &
  Pick<LinkProps, 'variantSize' | 'variantLevel'> & {
    ['data-custom-bullet']?: string;
  };

export const ListItemV2: React.FC<Props> = React.memo(
  ({
    id,
    style,
    className,
    variantLevel,
    variantSize = PARAGRAPH_SIZE.medium,
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
    const wrapperClassNames = getMergedClassname([
      styles.wrapper,
      className,
      variantLevel ? styles[variantLevel] : '',
      variantSize ? styles[variantSize] : styles.small,
    ]);

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('list item', {
          variantSize,
        });

    /**
     * Custom bullet
     */
    const renderCustomBullet = !!props['data-custom-bullet'];

    /**
     * Render
     */
    return React.createElement(
      'li',
      {
        id,
        style: renderCustomBullet
          ? {
              ...style,
              listStyleType: 'none',
            }
          : style,
        className: wrapperClassNames,
        ...props,
        ['data-custom-bullet']: renderCustomBullet ? props['data-custom-bullet'] : ' ',
      },
      <>
        <Paragraph
          variant={variantSize}
          className={styles.content}
          as={'div'}
          disableCapsize={true}
        >
          {renderedChildren}
        </Paragraph>
      </>
    );
  }
);
