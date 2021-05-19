---
name: Blocks
description:
  High-level components to render text, markdown content, images, medias etc.
tags:
  - markdown
  - content
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Blocks } from '../../src/code/blocks.code'; 
import BlocksCode from '!!raw-loader!../../src/code/blocks.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Markdown / Text

Used to render markdown, can contain inlined links, images and anything that
markdown supports. For more examples, see the Markdown section.

<ThemeWrapper>
  <Blocks />
</ThemeWrapper>

<CodeBlock>{BlocksCode}</CodeBlock>
