import React, { BlockquoteHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './blockquote.treat';

type Props = CommonComponentProps & BlockquoteHTMLAttributes<any> & {};

/**
 * <blockquote> The HTML <blockquote> Element (or HTML Block Quotation Element)
 * indicates that the enclosed text is an extended quotation. Usually, this is rendered
 * visually by indentation (see Notes for how to change it). A URL for the source of
 * the quotation may be given using the `cite` attribute, while a text representation
 * of the source can be given using the <cite> element.
 * @see https://devdocs.io/html/element/blockquote
 */
export const Blockquote: React.FC<Props> = React.memo((props) => {
  const type = 'blockquote';
  const { styles } = useStyles(stylesRef);
  const classNames = [styles.normal];
  const commonProps = useCommonProps({ ...props, classNames });

  return React.createElement(type, {
    ...commonProps,
  });
});
