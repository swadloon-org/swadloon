import { globalStyle, style } from 'treat';
import { Theme } from '../design-system/css-design-system';

export const wrapper = style((theme: Theme) => ({
  display: 'inherit',
  marginTop: 80,
}));

/**
 * Global classes for markdown documents
 */

globalStyle(`${wrapper} h1,h2,h3,h4,h5,h6`, ({ cssTheme, theme }: Theme) => ({
  marginBottom: '1.5em',
}));

globalStyle(`${wrapper} p + p`, ({ cssTheme, theme }: Theme) => ({
  marginTop: '1.5em',
  marginBottom: '1em',
}));
globalStyle(`${wrapper} pre`, ({ cssTheme, theme }: Theme) => ({
  maxWidth: 'calc(100%)',
  margin: '0 0 28px',
  overflowX: 'auto',

  borderRadius: '6px',
  padding: '16px',
  overflow: 'auto',
  fontSize: '85%',
  lineHeight: '1.45',
  backgroundColor: '#f2f5f8',
}));
globalStyle(`${wrapper} :not(pre) > code`, ({ cssTheme, theme }: Theme) => ({
  backgroundColor: 'rgba(27, 31, 35, 0.05)',
  color: '#373c49',
  fontSize: '85%',
  margin: '0',
  padding: '0.2em 0.4em',
  BorderRadius: '6px',
}));

//todo add theme fonts
globalStyle(
  `${wrapper} code[class*='language-'],
pre[class*='language-']`,
  ({ cssTheme, theme }: Theme) => ({
    color: '#24292e',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.4',
    MozTabSize: '8',
    OTabSize: '8',
    tabSize: '8',

    WebkitHyphens: 'none',
    MozHyphens: 'none',
    MsHyphens: 'none',
    hyphens: 'none',
  })
);
globalStyle(`${wrapper} .token.comment,.token.blockquote`, ({ cssTheme, theme }: Theme) => ({
  color: '#6a737d',
}));
globalStyle(`${wrapper} .token.cdata`, ({ cssTheme, theme }: Theme) => ({
  color: '#183691',
}));
globalStyle(
  `${wrapper} .token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property`,
  ({ cssTheme, theme }: Theme) => ({
    color: '#333',
  })
);
globalStyle(
  `${wrapper} .token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin `,
  ({ cssTheme, theme }: Theme) => ({
    color: '#a71d5d',
  })
);
globalStyle(
  `${wrapper} .token.string,
.token.url,
.token.regex,
.token.attr-value `,
  ({ cssTheme, theme }: Theme) => ({
    color: '#183691',
  })
);
globalStyle(
  `${wrapper} .token.property,
  .token.number,
  .token.boolean,
  .token.entity,
  .token.atrule,
  .token.constant,
  .token.symbol,
  .token.command,
  .token.code `,
  ({ cssTheme, theme }: Theme) => ({
    color: '#0086b3',
  })
);
globalStyle(
  `${wrapper} .token.tag,
  .token.selector,
  .token.prolog`,
  ({ cssTheme, theme }: Theme) => ({
    color: '#63a35c',
  })
);
globalStyle(
  `${wrapper} .token.function,
  .token.namespace,
  .token.pseudo-element,
  .token.class,
  .token.class-name,
  .token.pseudo-class,
  .token.id,
  .token.url-reference .token.variable,
  .token.attr-name`,
  ({ cssTheme, theme }: Theme) => ({
    color: '#005cc5',
  })
);
globalStyle(`${wrapper} .token.entity`, ({ cssTheme, theme }: Theme) => ({
  cursor: 'help',
}));
globalStyle(
  `${wrapper} .token.title,
.token.title .token.punctuation`,
  ({ cssTheme, theme }: Theme) => ({
    fontWeight: 'bold',
    color: '#1d3e81',
  })
);
globalStyle(`${wrapper} .token.list`, ({ cssTheme, theme }: Theme) => ({
  fontWeight: 'bold',
  color: '#ed6a43',
}));
globalStyle(`${wrapper} .token.inserted `, ({ cssTheme, theme }: Theme) => ({
  backgroundColor: '#eaffea',
  color: '#55a532',
}));
globalStyle(`${wrapper} .token.deleted`, ({ cssTheme, theme }: Theme) => ({
  backgroundColor: '#ffecec',
  color: '#bd2c00',
}));
globalStyle(`${wrapper} .token.bold`, ({ cssTheme, theme }: Theme) => ({
  fontWeight: 'bold',
}));
globalStyle(`${wrapper} .token.italic`, ({ cssTheme, theme }: Theme) => ({
  fontStyle: 'italic',
}));
globalStyle(`${wrapper} .language-json .token.property`, ({ cssTheme, theme }: Theme) => ({
  color: '#183691',
}));
globalStyle(`${wrapper} .language-markup .token.tag .token.punctuation `, ({ cssTheme, theme }: Theme) => ({
  color: '#333',
}));
globalStyle(
  `${wrapper} code.language-css,
.language-css .token.function`,
  ({ cssTheme, theme }: Theme) => ({
    color: '#0086b3',
  })
);
globalStyle(`${wrapper} .language-yaml .token.atrule `, ({ cssTheme, theme }: Theme) => ({
  color: '#63a35c',
}));
globalStyle(`${wrapper} code.language-yaml`, ({ cssTheme, theme }: Theme) => ({
  color: '#183691',
}));
globalStyle(`${wrapper} .language-ruby .token.function`, ({ cssTheme, theme }: Theme) => ({
  color: '#333',
}));
globalStyle(`${wrapper} .language-markdown .token.url`, ({ cssTheme, theme }: Theme) => ({
  color: '#795da3',
}));
globalStyle(`${wrapper} .language-makefile .token.symbol `, ({ cssTheme, theme }: Theme) => ({
  color: '#795da3',
}));
globalStyle(`${wrapper} .language-makefile .token.variable `, ({ cssTheme, theme }: Theme) => ({
  color: '#183691',
}));
globalStyle(`${wrapper} .language-makefile .token.builtin `, ({ cssTheme, theme }: Theme) => ({
  color: '#0086b3',
}));
globalStyle(`${wrapper} .language-bash .token.keyword`, ({ cssTheme, theme }: Theme) => ({
  color: '#0086b3',
}));
