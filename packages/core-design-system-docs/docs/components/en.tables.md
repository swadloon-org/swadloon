---
title: Tables
description: Tables are used to organize and display information.
tags:
  - organism
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Tables } from '../../src/code/tables.code'; 
import TablesCode from '!!raw-loader!../../src/code/tables.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Variants

### Default

The default table has a base style for the title, header and table elements
rows.

### Selection

Table can have the function to select individual row and allow the user to apply
an action. Actions appears when a a row is selected.

### Expansion

Expandable table are used to present elements by collasing them and preserve
space. It allows users to expanded the information needed to reveal more
information.

## Sizes

The table is available in four different row sizes: x-small, small, medium and
large.

## Table

<ThemeWrapper>
<Tables />
</ThemeWrapper>
<CodeBlock>{TablesCode}</CodeBlock>
