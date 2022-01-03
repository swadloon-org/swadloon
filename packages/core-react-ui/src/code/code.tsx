import React from 'react';

import { pascal } from 'case';

import { CodeMarkupType, ColorsColors } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import { colorVars } from '../theme';

import * as styles from './code.css';

/**
 * @typedef {Object} CodeProps
 */
type CodeProps = PrimitiveProps<'code'> & {
  /**
   * The type of code to render (determines the color used)
   */
  kind?: CodeMarkupType;
};

/**
 * @description Render an inline code block with monospaced font
 * @type {React.FC<CodeProps>}
 * @param {CodeProps} props
 */
export const Code: React.FC<CodeProps> = ({
  style,
  children,
  kind = CodeMarkupType.Keyword,
  ...props
}) => {
  const codeColorName = `code${pascal(kind)}`;
  const color = colorVars.colors.code[codeColorName as keyof ColorsColors['code']];
  return (
    <Primitive
      as={'code'}
      classNames={[styles.wrapper]}
      style={{ ...style, color: color }}
      {...props}
    >
      {children}
    </Primitive>
  );
};
