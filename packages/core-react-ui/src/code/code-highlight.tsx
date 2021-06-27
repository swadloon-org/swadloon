import Highlight, { Language, Prism, PrismTheme } from 'prism-react-renderer';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './code-highlight.treat';

type Props = {
  code?: string;
  className?: string;
  language?: string;
  theme?: PrismTheme;
  live?: boolean;

  injectPreElement?: boolean;
};

export const CodeHighlight: React.FC<Props> = ({
  code,
  children = '',
  language,
  theme,
  injectPreElement,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);

  return (
    <Highlight Prism={Prism} code={code || ''} theme={theme} language={language as Language}>
      {!injectPreElement
        ? ({ tokens, getLineProps, getTokenProps }) => (
            <React.Fragment>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </React.Fragment>
          )
        : ({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} ${styles.pre}`} style={{ ...style }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
    </Highlight>
  );
};
