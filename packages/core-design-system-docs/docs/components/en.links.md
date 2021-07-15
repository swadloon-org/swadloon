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

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'links.code.tsx'} 
  code={LinksCode}>
  <Links />
</ThemeWrapper>

## Variant Level

Like most components there are three level of importance for links:

- Primary
- Secondary
- Tertiary

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'links-level.code.tsx'} 
  code={LinksLevelCode}>
  <LinksLevel />
</ThemeWrapper>

## Size

Four sizes are available for links.

<ThemeWrapper displayControls={true} code={LinksSizesCode}>
  <LinksSizes />
</ThemeWrapper>

## Icon

The icon button variant support having the icon on the right side and only icon.

<ThemeWrapper displayControls={true} code={LinksIconCode}>
  <LinksIcon />
</ThemeWrapper>

## External

External link have an external icon on the right side.

<ThemeWrapper displayControls={true} code={LinksExternalCode}>
  <LinksExternal />
</ThemeWrapper>
