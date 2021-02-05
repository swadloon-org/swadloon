import React, { BlockquoteHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './blockquote.treat';

type Props = CommonComponentProps & BlockquoteHTMLAttributes<any> & {};

const defaultProps: Props = {
  children: 'Blockquote',
};

/**
 * <blockquote> The HTML <blockquote> Element (or HTML Block Quotation Element)
 * indicates that the enclosed text is an extended quotation. Usually, this is rendered
 * visually by indentation (see Notes for how to change it). A URL for the source of
 * the quotation may be given using the `cite` attribute, while a text representation
 * of the source can be given using the <cite> element.
 * @see https://devdocs.io/html/element/blockquote
 */
export const Blockquote: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = 'blockquote';

  return React.createElement(type, {
    className: `${className || ''}  ${styles.normal}`,
    ...props,
  });
});
