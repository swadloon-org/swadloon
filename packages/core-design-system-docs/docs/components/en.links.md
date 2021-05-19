---
name: Links
description:
tags:
  - test
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Links } from '../../src/code/links.code'; 
import LinksCode from '!!raw-loader!../../src/code/links.code.tsx';
import { LinksLevel } from '../../src/code/links-level.code'; 
import LinksLevelCode from '!!raw-loader!../../src/code/links-level.code.tsx';
import { LinksSizes } from '../../src/code/links-sizes.code'; 
import LinksSizesCode from '!!raw-loader!../../src/code/links-sizes.code.tsx';
import { LinksIcon } from '../../src/code/links-icon.code'; 
import LinksIconCode from '!!raw-loader!../../src/code/links-icon.code.tsx';
import { LinksExternal } from '../../src/code/links-external.code'; 
import LinksExternalCode from '!!raw-loader!../../src/code/links-external.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Variant

<ThemeWrapper>
<Links />
</ThemeWrapper>
<CodeBlock>{LinksCode}</CodeBlock>

## Variant Level

<ThemeWrapper>
<LinksLevel />
</ThemeWrapper>
<CodeBlock>{LinksLevelCode}</CodeBlock>

## Size

<ThemeWrapper>
<LinksSizes />
</ThemeWrapper>
<CodeBlock>{LinksSizesCode}</CodeBlock>

## Icon

<ThemeWrapper>
<LinksIcon />
</ThemeWrapper>
<CodeBlock>{LinksIconCode}</CodeBlock>

## External

<ThemeWrapper>
<LinksExternal />
</ThemeWrapper>
<CodeBlock>{LinksExternalCode}</CodeBlock>
