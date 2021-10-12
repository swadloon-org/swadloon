---
title: Headings
description: Headings and titles components
tags:
  - typography
componentStatus: ready
componentVersion: v1
componentTests: OK
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Titles } from '../../src/code/titles.code';
import TitlesCode from '!!raw-loader!../../src/code/titles.code.tsx'; 
import { Headings } from '../../src/code/headings.code'; 
import HeadingsCode from '!!raw-loader!../../src/code/headings.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Features

- 4 variants (h1-h4) plus 2 extra (t1-t2) for extra large text
- Support reversed color mode

## Variants

Titles have the same semantics as Headings but they have significantly larger.
In a design system headings (h1-h4) are normally sized for articles or blog
posts, but, there are other area where larger headings are needed.

For example, on landing pages, it is very common to have a larger font size for
the main sentence or key tagline. While we could use the `<Heading/>` component,
we decided to separate those larger titles to it's own `<Title/>` component.

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'titles.code.tsx'} 
  code={TitlesCode}>
  <Titles/>
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper 
  displayControls={true} 
  filename={'headings.code.tsx'} 
  code={HeadingsCode}>
  <Headings/>
</ThemeWrapper>
