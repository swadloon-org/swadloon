import { mdx, useMDXComponents } from '@mdx-js/react';
import { Language } from 'prism-react-renderer';
import React from 'react';
import { LiveContext, LiveError, LivePreview, LiveProvider, LiveProviderProps } from 'react-live';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import * as styleRefs from './code-block.treat';
import { CodeEditor } from './code-editor';
import { CodeHighlight } from './code-highlight';
import { githubTheme } from './code-theme';

type Props = {
  children?: string;
  className?: string;
  live?: boolean;
} & Pick<LiveProviderProps, 'scope'>;

/**
 * @see https://github.com/mdx-js/mdx/edit/master/examples/syntax-highlighting/src/pages/index.mdx
 */
export const CodeBlock: React.FC<Props> = ({ children = '', className = '', live, scope }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const components = useMDXComponents();
  const language = className ? className.replace(/language-/, '') : 'tsx';
  const trimmedCode = children ? children.trim() : '';
  const formattedCode = trimmedCode.replace(/(\r?\n|\r)+$/g, ''); // remove extra line inserted by prettier
  // const formattedCodePrettier = formatCode(trimmedCode).replace(/(\r?\n|\r)$/g, ''); // remove extra line inserted by prettier

  if (live) {
    return (
      <LiveProvider
        code={formattedCode}
        theme={githubTheme}
        transformCode={(code) => '/** @jsx mdx */' + code}
        scope={{ mdx, ...components, ...scope }}
        language={language as Language}
      >
        <Stack gap={[cssTheme.sizing.var.x4]}>
          <LivePreview className={styles.preview} />

          {/* @ts-ignore */}
          <LiveContext.Consumer>
            {/* @ts-ignore */}
            {({ code, language, theme, disabled, onChange }) => (
              <CodeEditor
                theme={theme}
                code={code}
                language={language}
                disabled={disabled}
                onChange={onChange}
              />
            )}
          </LiveContext.Consumer>

          <div className={styles.error}>
            <LiveError />
          </div>
        </Stack>
      </LiveProvider>
    );
  }

  return (
    <CodeHighlight
      code={formattedCode}
      theme={githubTheme}
      language={language as Language}
      injectPreElement={true}
    />
  );
};
