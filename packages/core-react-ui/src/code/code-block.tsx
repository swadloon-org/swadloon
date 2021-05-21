import { useMDXComponents } from '@mdx-js/react';
import { Language } from 'prism-react-renderer';
import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import * as styleRefs from './code-block.treat';
import { CodeHighlight } from './code-highlight';
import { githubTheme } from './code-theme';

type Props = {
  children?: string;
  className?: string;
  live?: boolean;
};

/**
 * @see https://github.com/mdx-js/mdx/edit/master/examples/syntax-highlighting/src/pages/index.mdx
 */
export const CodeBlock: React.FC<Props> = ({ children = '', className = '' }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const components = useMDXComponents();
  const language = className ? className.replace(/language-/, '') : 'tsx';
  const trimmedCode = children ? children.trim() : '';
  const formattedCode = trimmedCode.replace(/(\r?\n|\r)+$/g, ''); // remove extra line inserted by prettier
  // const formattedCodePrettier = formatCode(trimmedCode).replace(/(\r?\n|\r)$/g, ''); // remove extra line inserted by prettier

  return (
    <CodeHighlight
      code={formattedCode}
      theme={githubTheme}
      language={language as Language}
      injectPreElement={true}
    />
  );
};
