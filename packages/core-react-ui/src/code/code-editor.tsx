import { Language, PrismTheme } from 'prism-react-renderer';
import React from 'react';
import Editor from 'react-simple-code-editor';
import { useStyles } from 'react-treat';
import * as styleRefs from './code-editor.treat';
import { CodeHighlight } from './code-highlight';

/**
 * Global import to load additional languages
 */
// // @ts-ignore
// (typeof global !== 'undefined' ? global : window).Prism = Prism;
// // @ts-ignore
// require('prismjs/components/prism-clike');
// // @ts-ignore
// require('prismjs/components/prism-javascript');

type Props = {
  code?: string;
  disabled?: boolean;
  language?: Language;
  onChange?: (code: string) => any;
  style?: object;
  theme?: PrismTheme;
};

type State = {
  code: string;
  prevCodeProp: string;
};

export class CodeEditor extends React.Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.code !== state.prevCodeProp) {
      return { code: props.code, prevCodeProp: props.code };
    }

    return null;
  }

  state = {
    code: '',
    prevCodeProp: '',
  };

  updateContent = (code: string) => {
    this.setState({ code }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.code);
      }
    });
  };

  highlightCode = (code: string) => (
    <CodeHighlight code={code} theme={this.props.theme} language={this.props.language}></CodeHighlight>
  );

  render() {
    return (
      <EditorWrapper
        props={this.props}
        state={this.state}
        highlightCode={this.highlightCode}
        updateContent={this.updateContent}
      />
    );
  }
}

const EditorWrapper: React.FC<{
  props: Props;
  state: State;
  highlightCode: (code: string) => any;
  updateContent: (code: string) => any;
}> = ({ props, state, highlightCode, updateContent }) => {
  const { style, code: _code, onChange, language, theme, ...rest } = props;
  const { code } = state;
  const { styles } = useStyles(styleRefs);

  const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {};

  return (
    <Editor
      value={code}
      highlight={highlightCode}
      onValueChange={updateContent}
      className={styles.editor}
      insertSpaces={true}
      tabSize={2}
      textareaClassName={styles.textAreaEditor}
      preClassName={styles.textAreaEditor}
      padding={16}
      style={
        {
          fontFamily: 'monospace',
          ...baseTheme,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
};
