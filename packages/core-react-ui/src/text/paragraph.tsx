import React, { HTMLAttributes } from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import { TextCommonProps } from '../props/text-common.props';
import { getMergedClassname } from '../utilities-components/component.utilities';

import * as textStyles from '../styles/text-color.css';
import * as styles from './paragraph.css';

type Tag = 'p' | 'b' | 'div' | 'small' | 'strong' | 'em' | 'del';

type Props = PrimitiveProps<Tag> &
  TextCommonProps &
  HTMLAttributes<HTMLParagraphElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variantLevel: Variant.primary,
  variant: PARAGRAPH_SIZE.medium,
  children: 'Paragraph',
};

export const Paragraph: React.FC<Props> = React.memo(
  ({
    variant,
    variantStyle,
    variantLevel = Variant.primary,
    display,
    disableCapsize,
    readableWidth,
    className,
    as,
    ...props
  }) => {
    const type = as ? as : 'p';
    const classNames = [
      className,
      styles.base,
      styles.variants({
        size: variant || defaultProps.variant,
        style: variantStyle || 'normal',
        displayMode: display,
        disableCapsize: disableCapsize,
        readableWidth: readableWidth,
      }),
      textStyles.getTextColorStyles({
        variant: variantLevel || defaultProps.variantLevel,
      }),
    ];

    return <Primitive as={type} classNames={classNames} {...props} />;
  }
);

export const ParagraphBold: React.FC<Props> = React.memo(
  ({ variant, variantStyle, variantLevel, className, display = 'inline-block', as, ...props }) => {
    const classNames = getMergedClassname([className]);

    return (
      <Paragraph
        as={'b'}
        variantStyle={TEXT_STYLE.bold}
        className={classNames}
        display={display}
        {...props}
      ></Paragraph>
    );
  }
);
