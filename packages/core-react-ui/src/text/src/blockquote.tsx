import React, { BlockquoteHTMLAttributes } from 'react';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './blockquote.css';

type Props = PrimitiveProps<'blockquote'> & BlockquoteHTMLAttributes<any> & {};

/*
 * <blockquote> The HTML <blockquote> Element (or HTML Block Quotation Element)
 * indicates that the enclosed text is an extended quotation. Usually, this is rendered
 * visually by indentation (see Notes for how to change it). A URL for the source of
 * the quotation may be given using the `cite` attribute, while a text representation
 * of the source can be given using the <cite> element.
 * @see https://devdocs.io/html/element/blockquote
 */
export const Blockquote: React.FC<Props> = React.memo((props) => {
  return <Primitive as={'blockquote'} classNames={[styles.base]} {...props}></Primitive>;
});
