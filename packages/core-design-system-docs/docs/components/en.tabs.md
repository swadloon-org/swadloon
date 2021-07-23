---
title: Tabs
description:
  Tabs are a set of layered sections of content, known as tab panels, that
  display one panel of content at a time. Each tab panel has an associated tab
  element, that when activated, displays the panel.
tags:
  - molecule
componentVersion: v1
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { TabsExample } from '../../src/code/tabs.code'; 
import TabsExampleCode from '!!raw-loader!../../src/code/tabs.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Specs

- https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
- https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html

## Features

- 1 variant (primary)
- 1 size (medium)
- Support reversed color mode

## Accessibility

## Variants

- Primary

<ThemeWrapper code={TabsExampleCode}>
  <TabsExample />
</ThemeWrapper>

## Sizes

- Medium

## Icon

_Not supported right now_

## States

_Not supported right now_
