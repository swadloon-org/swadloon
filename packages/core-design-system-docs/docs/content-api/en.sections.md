---
title: Sections
description: High-level components to render pages.
tags:
  - website api
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { SectionsBase } from '../../src/code/sections-base.code'; 
import SectionsBaseCode from '!!raw-loader!../../src/code/sections-base.code.tsx';
import { SectionsDivider } from '../../src/code/sections-divider.code'; 
import SectionsDividerCode from '!!raw-loader!../../src/code/sections-divider.code.tsx';
import { SectionsSwitcher } from '../../src/code/sections-switcher.code'; 
import SectionsSwitcherCode from '!!raw-loader!../../src/code/sections-switcher.code.tsx';
import { SectionsBanner } from '../../src/code/sections-banner.code'; 
import SectionsBannerCode from '!!raw-loader!../../src/code/sections-banner.code.tsx';
import { SectionsCallOut } from '../../src/code/sections-callout.code'; 
import SectionsCallOutCode from '!!raw-loader!../../src/code/sections-callout.code.tsx';
import { SectionsStatement } from '../../src/code/sections-statement.code';
import SectionsStatementCode from '!!raw-loader!../../src/code/sections-statement.code.tsx';
import { SectionsShowCase } from '../../src/code/sections-showcase.code'; 
import SectionsShowCaseCode from '!!raw-loader!../../src/code/sections-showcase.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

> Note: This page is best viewed on the full width layout mode, activate it in
> the top navbar or in the menu on mobile

## Overview

Sections are high level layout components to organize content in Pages. They
have predefined layouts represented by different components. Content inside
Sections should always be contained in one of the available Blocks.

## Features

- Predefined responsive layouts
- 3 variants (primary, secondary and tertiary)
- Support reversed color mode

## Components

The base `<SectionBase/>` component handles props that all other sections use.

### Base Section

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-base.code.tsx'}
  code={SectionsBaseCode}>
  <SectionsBase />
</ThemeWrapper>

### The "Switcher"

2 centered columns layout that becomes 1 on mobile.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-switcher.code.tsx'}
  code={SectionsSwitcherCode}>
  <SectionsSwitcher />
</ThemeWrapper>

### The "Divider"

2 columns layout with the right one having no padding.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-base.code.tsx'}
  code={SectionsDividerCode}>
  <SectionsDivider />
</ThemeWrapper>

### The "Banner"

1 background image with a centered block.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-banner.code.tsx'}
  code={SectionsBannerCode}>
  <SectionsBanner />
</ThemeWrapper>

### The "CallOut"

1 section with a background image who's adapted itself to section height.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-base.code.tsx'}
  code={SectionsCallOutCode}>
  <SectionsCallOut />
</ThemeWrapper>

### The "Statement"

1 top block full width followed with multiple blocks inline.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-statement.code.tsx'}
  code={SectionsStatementCode}>
  <SectionsStatement />
</ThemeWrapper>

### The "Show Case"

Like the CallOut with more than one block.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true}
  filename={'sections-showcase.code.tsx'}
  code={SectionsShowCaseCode}>
  <SectionsShowCase />
</ThemeWrapper>
