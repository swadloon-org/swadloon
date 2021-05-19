---
name: Tags
description:
tags:
  - molecule
  - label
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Tags } from '../../src/code/tags.code'; 
import TagsCode from '!!raw-loader!../../src/code/tags.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

Information indicator used to associate content with specific keywords.

## Variants

<ThemeWrapper>
  <Tags />
</ThemeWrapper>

<ThemeWrapper reversed={true}>
  <Tags />
</ThemeWrapper>

<CodeBlock>{TagsCode}</CodeBlock>
