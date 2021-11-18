---
subject: Brand
title: Fonts - 🅰
description: The different typefaces that are used in the system.
tags:
  - foundations
editPageUrl: https://github.com/newrade/newrade/edit/master/packages/core-design-system-docs/docs/brand/en.fonts.md
nextPageUrl: /design-system/brand/typography/
nextPageLabel: 'Next: Typography'
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
hierarchy using size, colors and line-height.

## Sans Serif

A sans-serif typeface doesn't have any serif.

<!-- prettier-ignore -->
<ThemeWrapper>
  <FontsSans/>
</ThemeWrapper>

## Sans Serif Alternate

A sans-serif alternate typeface is used to alternate the main sans-serif
typeface.

<!-- prettier-ignore -->
<ThemeWrapper>
<FontsSansAlternate/>
</ThemeWrapper>

## Serif

A serif typeface has serif, a small line or stroke, at the end of stroke of
letters and symbols.

<!-- prettier-ignore -->
<ThemeWrapper>
  <FontsSerif/>
</ThemeWrapper>

## Mono

A mono typeface has letters and characters that are mathematically the same
width.

<!-- prettier-ignore -->
<ThemeWrapper>
  <FontsMono/>
</ThemeWrapper>
