import React from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { Paragraph } from '../text/paragraph';
import { getDefaultTextFromProps } from '../utilities-iso';

import { ListItemCompProps } from './list-item.props';

import * as textStyles from '../styles/text-color.css';
import * as styles from './list-item.css';

type Props = ListItemCompProps;

const defaultProps: Props = {
  kind: Variant.primary,
  size: PARAGRAPH_SIZE.medium,
  textStyle: TEXT_STYLE.normal,
  children: 'List Item',
};

export const ListItemV2: React.FC<Props> = function ListItemV2({
  as,
  AsElement,
  style,
  children,
  kind = defaultProps.kind,
  size = defaultProps.size,
  textStyle = defaultProps.textStyle,
  ...props
}) {
  /**
   * Hooks
   */

  /**
   *
   * Props
   *
   */

  const classNames = [
    styles.base,
    styles.variants({
      size: size,
      style: textStyle,
    }),
    textStyles.textVariants({
      variant: kind,
    }),
  ];

  /**
   *
   * Default children
   *
   */

  const renderedChildren = children
    ? children
    : getDefaultTextFromProps('list item', {
        size,
      });

  /**
   *
   * Custom bullet
   *
   */
  const dataCustomBullet = props['data-custom-bullet'];
  const renderCustomBullet = !!dataCustomBullet;

  /**
   *
   * Icon
   *
   */

  return (
    <Primitive
      as={'li'}
      style={
        renderCustomBullet
          ? {
              ...style,
              listStyleType: 'none',
            }
          : style
      }
      classNames={classNames}
      {...props}
      data-custom-bullet={renderCustomBullet ? dataCustomBullet : 'none'}
    >
      <Paragraph size={size} className={styles.text} as={'div'} disableCapsize={true}>
        {renderedChildren}
      </Paragraph>
    </Primitive>
  );
};
