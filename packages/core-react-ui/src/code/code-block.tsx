import React from 'react';

import { Language } from 'prism-react-renderer';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities';

import { CodeHighlight } from './code-highlight';
import { prismTheme } from './code-theme';

import * as styles from './code-block.css';

/**
 * @name CodeBlockProps
 * @typedef {Object} CodeBlockProps
 */
type CodeBlockProps = PrimitiveProps<'code'> & {
  /**
   * Source code to highlight with PrismJS
   */
  children?: string;
  /**
   * Class to apply to the `code` element. You can also pass a class formatted as
   * language-lang where lang is the desired language highlight to apply.
   *
   * If not provided, it will fallback to the filename's extension and if missing too, will default to '.tsx'
   */
  className?: string;
  /**
   * Class to apply to the `pre` element
   */
  preClassName?: string;
  /**
   * Display a filename in the editor header
   */
  filename?: string;
};

/**
 * Component that renders highlighted source code PrismJS.
 *
 * @see https://github.com/PrismJS/prism/
 * @see https://github.com/mdx-js/mdx/edit/master/examples/syntax-highlighting/src/pages/index.mdx
 *
 * @name CodeBlock
 * @type {React.FC<CodeBlockProps>}
 * @param {CodeBlockProps} props
 */
export const CodeBlock: React.FC<CodeBlockProps> = function CodeBlock({
  children = '',
  className = '',
  preClassName,
  filename,
  ...props
}) {
  const filenameExtMatch = filename ? /(?<filename>.+)\.(?<ext>.+)/gi.exec(filename) : null;
  const filenameExt = filenameExtMatch ? filenameExtMatch.groups?.['ext'] : 'tsx';
  const language = className
    ? className.replace(/language-/, '')
    : filenameExt
    ? filenameExt
    : 'tsx';

  if (typeof children !== 'string') {
    console.warn(
      `<CodeBlock/> accepts string children only, please make sure that you don't have more than one children and that there are no spaces around, e.g. <CodeBlock> {CodeString} </CodeBlock>.`
    );
    return null;
  }

  const trimmedCode = children ? children.trim() : '';
  const formattedCode = trimmedCode.replace(/(\r\n|\r)+$/g, ''); // remove extra line inserted by prettier

  return (
    <Primitive as={'code'} classNames={[className, styles.wrapper]}>
      {filename ? (
        <div className={styles.header}>
          {filename}

          <div className={styles.langTag}>{language}</div>
        </div>
      ) : null}

      <CodeHighlight
        code={formattedCode}
        theme={prismTheme}
        language={language as Language}
        preClassName={preClassName}
        injectPreElement={true}
      ></CodeHighlight>
    </Primitive>
  );
};
