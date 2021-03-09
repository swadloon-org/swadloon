import { PARAGRAPH_SIZE, TEXT_LEVEL, TEXT_STYLE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { TextCommonProps } from '../props/text-common.props';
import * as colorTextStylesRef from '../styles/color-text.treat';
import { getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './paragraph.treat';

type Props = CommonComponentProps &
  TextCommonProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: TEXT_LEVEL;
  };

const defaultProps: Props = {
  variant: PARAGRAPH_SIZE.medium,
  children: 'Paragraph',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const Paragraph: React.FC<Props> = React.memo(
  ({ variant, variantStyle, variantLevel = TEXT_LEVEL.primary, display, className, as, ...props }) => {
    const { styles } = useStyles(stylesRef);
    const { colorTextStyles } = useStyles(colorTextStylesRef);

    const type = as ? as : 'p';
    const classNames = getMergedClassname([
      className,
      styles.normal,
      display === 'inline-block' ? styles.inline : '',
      styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)],
      variantStyle ? styles[variantStyle] : '',
      variantLevel ? colorTextStyles[variantLevel] : '',
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
