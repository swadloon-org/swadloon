---
name: Links
description: Links are used in sentence or paragraph as navigational elements.
tags:
  - molecule
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

There are two variants for links:

- No underline
- Underline

<ThemeWrapper>
<Links />
</ThemeWrapper>
<CodeBlock>{LinksCode}</CodeBlock>

## Variant Level

Like most components there are three level of importance for links:

- Primary
- Secondary
- Tertiary

<ThemeWrapper>
<LinksLevel />
</ThemeWrapper>
<CodeBlock>{LinksLevelCode}</CodeBlock>

## Size

Four sizes are available for links.

<ThemeWrapper>
<LinksSizes />
</ThemeWrapper>
<CodeBlock>{LinksSizesCode}</CodeBlock>

## Icon

The icon button variant support having the icon on the right side and only icon.

<ThemeWrapper>
<LinksIcon />
</ThemeWrapper>
<CodeBlock>{LinksIconCode}</CodeBlock>

## External

External link have an external icon on the right side.

<ThemeWrapper>
<LinksExternal />
</ThemeWrapper>
<CodeBlock>{LinksExternalCode}</CodeBlock>
