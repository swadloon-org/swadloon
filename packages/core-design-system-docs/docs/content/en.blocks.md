---
name: Blocks
tags:
  - test
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Blocks } from '../../src/code/blocks.code'; 
import BlocksCode from '!!raw-loader!../../src/code/blocks.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Blocks

High-level content components to display text, markdown, images, medias etc.

## Markdown / Text

Used to render markdown, can contain inlined links, images and anything that
markdown supports. For more examples, see the Markdown section.

<Blocks />
<CodeBlock>{BlocksCode}</CodeBlock>
