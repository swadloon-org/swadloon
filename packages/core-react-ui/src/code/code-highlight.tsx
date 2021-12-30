import React from 'react';

import Highlight, { Language, Prism, PrismTheme } from 'prism-react-renderer';

import { getMergedClassname } from '../utilities/component.utilities';

import * as styles from './code-highlight.css';

type Props = {
  code?: string;
  className?: string;
  preClassName?: string;
  language?: string;
  theme?: PrismTheme;
  live?: boolean;
  injectPreElement?: boolean;
};

export const CodeHighlight: React.FC<Props> = ({
  code,
  children = '',
  className,
  preClassName,
  language,
  theme,
  injectPreElement,
  ...props
}) => {
  return (
    <Highlight
      Prism={Prism}
      code={code || ''}
      theme={theme}
      language={language as Language}
      {...props}
    >
      {!injectPreElement
        ? ({ tokens, getLineProps, getTokenProps }) => (
            <React.Fragment>
              {tokens.map((line, i) => {
                const lineProps = { ...getLineProps({ line, key: i }) };
                const lineClassName = getMergedClassname([lineProps.className, styles.tokenLine]);
                return (
                  <div key={i} {...lineProps} className={lineClassName}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              })}
            </React.Fragment>
          )
        : ({ className, style, tokens, getLineProps, getTokenProps }) => {
            const preClassnames = getMergedClassname([styles.pre, className, preClassName]);
            return (
              <pre className={preClassnames} style={{ ...style }}>
                {tokens.map((line, i) => {
                  const lineProps = { ...getLineProps({ line, key: i }) };
                  const lineClassName = getMergedClassname([lineProps.className, styles.tokenLine]);

                  return (
                    <div key={i} {...lineProps} className={lineClassName}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </pre>
            );
          }}
    </Highlight>
  );
};
