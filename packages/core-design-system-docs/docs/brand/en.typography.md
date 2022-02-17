---
title: Typography - 🔠
description:
  Typography are based on the brand of a design system and are used to create
  clear hierarchies and organize information.
tags:
  - foundations
nextPageUrl: /design-system/brand/colors/
nextPageLabel: 'Next: Colors'
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Fonts } from '../../src/code/fonts.code';
import { FontsSans } from '../../src/code/fonts-sans.code';
import { FontsSansAlternate } from '../../src/code/fonts-sans-alternate.code';
import { FontsSerif } from '../../src/code/fonts-serif.code';
import { FontsMono } from '../../src/code/fonts-mono.code';
import { Titles } from '../../src/code/titles.code';
import { Headings } from '../../src/code/headings.code';
import { Labels } from '../../src/code/labels.code';
import { Paragraphs } from '../../src/code/paragraphs.code';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Overview

Typography starts by setting a foundation of font families and weights to create
hierarchy using font size, colors and line-height.

## Level Variant

Visual importance of text has 3 levels: primary, secondary and tertiary.

<!-- prettier-ignore -->
<ThemeWrapper viewport={'auto'}> 
  <Heading variantLevel={'primary'} variant={'h2'}>Title</Heading>
  <Label variantLevel={'secondary'} textStyle={'boldUppercase'}>Subtitle</Label>
  <Paragraph variantLevel={'primary'}><Lorenipsum/></Paragraph>
  <Paragraph variantLevel={'tertiary'} variant={'small'}>Published 4h ago</Paragraph>
</ThemeWrapper>

## Responsive Typography

Our typographic system allows for configurable text styles at each viewport
(mobile, tablet and desktop).

As exemple, titles (which are semantically the same as headings but with a
larger font size), have to be significantly smaller on mobile compared to
desktop.

Below the titles for desktop, tablet and mobile respectively:

<!-- prettier-ignore -->
<ThemeWrapper viewport={'desktop'}>
  <Titles/>
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper viewport={'tablet'}>
  <Titles/>
</ThemeWrapper>

<!-- prettier-ignore -->
<ThemeWrapper viewport={'mobile'}>
  <Titles/>
</ThemeWrapper>

## Titles

Titles have the same semantics as Headings but they have significantly larger.
In a design system headings (h1-h4) are normally sized for articles or blog
posts, but, there are other area where larger headings are needed.

<!-- prettier-ignore -->
<ThemeWrapper> 
  <Titles/>
</ThemeWrapper>

For example, on landing pages, it is very common to have a larger font size for
the main sentence or key tagline. While we could use the `<Heading/>` component,
we decided to separate those larger titles to it's own `<Title/>` component.

This allows us to have specific font sizes and styles for both headings and
their larger siblings that we call titles.

## Headings

Headings (h1-h4) are used to indicate the hierachy of a section.

<!-- prettier-ignore -->
<ThemeWrapper>
  <Headings/>
</ThemeWrapper>

> The HTML `<h1>`–`<h6>` elements represent six levels of section headings.
> `<h1>` is the highest section level and `<h6>` is the lowest.
>
> [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

## Paragraphs

Paragraph text comes in 4 sizes and 3 styles (normal, italic and bold).

<!-- prettier-ignore -->
<ThemeWrapper>
  <Paragraphs/>
</ThemeWrapper>

## Labels

<!-- prettier-ignore -->
<ThemeWrapper>
  <Labels/>
</ThemeWrapper>

Labels are used in forms, inside buttons and all other places where short text
description are needed.

There are 3 sizes of label and 3 styles (bold, uppercase, bold uppercase).

## Reversed Color Mode

All text content can be used in reversed mode.

<!-- prettier-ignore -->
<ThemeWrapper style={{padding: '24px 16px'}} reversed="true">
  <Titles/>
  <Headings/>
  <Labels/>
  <Paragraphs/>
</ThemeWrapper>
