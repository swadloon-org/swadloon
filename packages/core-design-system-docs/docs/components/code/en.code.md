---
title: Code
tags:
  - atom
  - tools
  - development
  - documentation
jsdocImports: ['Code', 'CodeProps']
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { CodeCode } from '../../../src/code/code.code'; 
import CodeCodeCode from '!!raw-loader!../../../src/code/code.code.tsx';
import { CodeMarkupType } from '@newrade/core-design-system';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<!-- prettier-ignore -->
<ThemeWrapper
  code={CodeCodeCode}
  filename={'code.code.tsx'}
  displayControls={false}
  displayThemeSelection={false}
  viewportControl={false}
  viewportOverflowX={'auto'}>
  <CodeCode/>
</ThemeWrapper>

## Features

<ul>
  <li data-custom-bullet="✅">supports <Code>{Object.keys(CodeMarkupType).length}</Code> different colors (token types)</li>
</ul>

## Theming

- uses colors defined in `Colors.colors.code`
- uses the monospaced font defined in `Typography.fonts.monospace`
- the `fontSize` is smaller than the current size, but clamped to reasonable min
  and max values

## API

<DocPropsTable props={props}/>
