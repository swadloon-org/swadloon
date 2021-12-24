import React from 'react';
import { useStyles } from 'react-treat';

import { Language } from 'prism-react-renderer';

import { getMergedClassname } from '../utilities';

import * as styleRefs from './code-block.treat';
import { CodeHighlight } from './code-highlight';
import { githubTheme } from './code-theme';

type Props = {
  children?: string;
  className?: string;
  preClassName?: string;
  live?: boolean;
  filename?: string;
};

/**
 * @see https://github.com/mdx-js/mdx/edit/master/examples/syntax-highlighting/src/pages/index.mdx
 */
export const CodeBlock: React.FC<Props> = ({
  children = '',
  className = '',
  preClassName,
  filename,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const language = className ? className.replace(/language-/, '') : 'tsx';

  if (typeof children !== 'string') {
    console.warn(
      `<CodeBlock/> accepts string children only, please make sure that you don't have more than one children and that there are no spaces around, e.g. <CodeBlock> {CodeString} </CodeBlock>.`
    );
    return null;
  }

  const trimmedCode = children ? children.trim() : '';
  const formattedCode = trimmedCode.replace(/(\r\n|\r)+$/g, ''); // remove extra line inserted by prettier

  const classnames = getMergedClassname([className, styles.wrapper]);

  return (
    <code className={classnames}>
      {filename ? (
        <div className={styles.header}>
          {filename}

          <div className={styles.langTag}>{language}</div>
        </div>
      ) : null}

      <CodeHighlight
        code={formattedCode}
        theme={githubTheme}
        language={language as Language}
        preClassName={preClassName}
        injectPreElement={true}
      ></CodeHighlight>
    </code>
  );
};
