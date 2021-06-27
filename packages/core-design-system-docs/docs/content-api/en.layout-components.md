---
name: Layout Components
description: Responsive layout components to handle basic layout needs.
tags:
  - layout
  - component
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { LayoutBoxV2 } from '../../src/code/box-default.code'; 
import LayoutBoxV2Code from '!!raw-loader!../../src/code/box-default.code.tsx';
import { LayoutBoxV3 } from '../../src/code/box-padding.code'; 
import LayoutBoxV3Code from '!!raw-loader!../../src/code/box-padding.code.tsx';
import { LayoutCenter } from '../../src/code/center.code'; 
import LayoutCenterCode from '!!raw-loader!../../src/code/center.code.tsx';
import { LayoutCluster } from '../../src/code/cluster.code'; 
import LayoutClusterCode from '!!raw-loader!../../src/code/cluster.code.tsx';
import { LayoutGrid } from '../../src/code/grid.code'; 
import LayoutGridCode from '!!raw-loader!../../src/code/grid.code.tsx';
import { LayoutStack } from '../../src/code/stack.code'; 
import LayoutStackCode from '!!raw-loader!../../src/code/stack.code.tsx';
import { LayoutSwitcher } from '../../src/code/switcher.code'; 
import LayoutSwitcherCode from '!!raw-loader!../../src/code/switcher.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Box

The `<Box/>` component is a flex container with padding.

<ThemeWrapper>
  <LayoutBoxV2 />
</ThemeWrapper>

<CodeBlock>{LayoutBoxV2Code}</CodeBlock>

### Box [v3]

<TagStatus name="version" status="v3"></TagStatus>

Test for BoxV3. Here the `padding` prop uses the new template literal feature
available in TypeScript `v4.1`.

<ThemeWrapper>
  <LayoutBoxV3 />
</ThemeWrapper>

<CodeBlock>{LayoutBoxV3Code}</CodeBlock>

## Center

Center content respecting the content margin set on each viewport.

<ThemeWrapper>
  <LayoutCenter /> 
</ThemeWrapper>

<CodeBlock>{LayoutCenterCode}</CodeBlock>

## Stack

Vertical grid container.

<ThemeWrapper>
  <LayoutStack />
</ThemeWrapper>

<CodeBlock>{LayoutStackCode}</CodeBlock>

## Switcher

Used to separate 2 or more blocks horizontally on desktop and vertically on
mobile.

<ThemeWrapper>
  <LayoutSwitcher />
</ThemeWrapper>

<CodeBlock>{LayoutSwitcherCode}</CodeBlock>

## Cluster

Used to inline content horizontally without wrapping.

<ThemeWrapper>
  <LayoutCluster />
</ThemeWrapper>

<CodeBlock>{LayoutClusterCode}</CodeBlock>

## Grid

Used to make a grid of content horizontally or vertically.

<ThemeWrapper>
  <LayoutGrid />
</ThemeWrapper>

<CodeBlock>{LayoutGridCode}</CodeBlock>
