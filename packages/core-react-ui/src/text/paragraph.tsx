import { PARAGRAPH_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import { TextCommonProps } from '../props/text-common.props';
import * as colorTextStylesRef from '../styles/color-text.treat';
import { getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './paragraph.treat';

type Props = PrimitiveProps<any> &
  TextCommonProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variantLevel: Variant.primary,
  variant: PARAGRAPH_SIZE.medium,
  children: 'Paragraph',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
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
    const { styles } = useStyles(stylesRef);
    const { colorTextStyles } = useStyles(colorTextStylesRef);

    const type = as ? as : 'p';
    const classNames = getMergedClassname([
      className,
      styles.normal,
      display === 'inline-block' ? styles.inline : '',
      readableWidth ? styles.readableWidth : '',
      disableCapsize ? styles.disableCapsize : '',
      styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)],
      variantStyle ? styles[variantStyle] : '',
      colorTextStyles[variantLevel ? variantLevel : (defaultProps.variantLevel as Variant)],
    ]);

    return React.createElement(type, {
      className: classNames,
      ...props,
    });
  }
);

export const Bold: React.FC<Props> = React.memo(
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
