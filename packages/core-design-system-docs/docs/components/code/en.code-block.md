---
title: CodeBlock
tags:
  - organism
  - tools
  - development
  - prism
  - documentation
jsdocImports: ['CodeBlock', 'CodeBlockProps']
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import CodeBlockTypeScriptCode from '!!raw-loader!../../../src/code/code-block-typescript.code.ts';
import CodeBlockJSXTypeScriptCode from '!!raw-loader!../../../src/code/code.code.tsx';
import CodeBlockJavaScriptCode from '!!raw-loader!../../../src/code/code-block-javascript.code.js';
import CodeBlockCSSCode from '!!raw-loader!../../../src/code/code-block-css.code.css';
import * as CodeBlockJSONCode from '../../../src/code/code-block-json.code.json';
import { CodeMarkupType } from '@newrade/core-design-system';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeBlockTypeScriptCode}
  filename={'code-block-typescript.code.ts'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

## Features

<ul>
  <li data-custom-bullet="✅">supported format includes <Code>.js</Code>,<Code>.jsx</Code>, <Code>.ts</Code>, <Code>.tsx</Code>, <Code>.css</Code> </li>
  <li data-custom-bullet="✅">renders a banner with the filename, and a tag for the file format</li>
</ul>

## Examples

### TypeScript / TSX / JS / JSX

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeBlockTypeScriptCode}
  filename={'code-block-typescript.code.ts'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeBlockJSXTypeScriptCode}
  filename={'code.code.tsx'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeBlockJavaScriptCode}
  filename={'code-block-javascript.code.js'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

### CSS

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeBlockCSSCode}
  filename={'code-block-css.code.css'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

### JSON

<!-- prettier-ignore -->
<ThemeWrapper
  code={JSON.stringify(CodeBlockJSONCode.default, null, 2)}
  filename={'code-block-json.code.json'}
  displayTabs={false}
  initialTab={'code'}>
</ThemeWrapper>

## Theming

- uses colors defined in `Colors.colors.code`
- uses the monospaced font defined in `Typography.fonts.monospace`

## API

<DocPropsTable props={props}/>
