import { TagProps, TagSize, Variant } from '@newrade/core-design-system';
import React from 'react';
import { useStyles } from 'react-treat';
import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as stylesRef from './tag.treat';

type Props = PrimitiveProps<'div'> &
  TagProps & {
    children?: string;
  };

export const Tag: React.FC<Props> = React.memo(
  ({ id, style, className, children, as, variant, kind, size = TagSize.medium, ...props }) => {
    const styles = useStyles(stylesRef);

    return (
      <Primitive
        {...{
          id,
          style,
          className,
          classNames: [
            styles.base,
            size ? styles[size] : styles[TagSize.medium],
            variant ? styles[variant] : styles[Variant.primary],
          ],
          ...props,
        }}
      >
        <Primitive
          classNames={[
            styles.label,
            size === TagSize.medium ? styles.mediumLabel : styles.smallLabel,
          ]}
        >
          {children}
        </Primitive>
      </Primitive>
    );
  }
);
