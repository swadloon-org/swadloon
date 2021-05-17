---
name: Layout Components
tags:
  - test
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

## Layout Components

Reusable and responsive primitive layout components.

### Box

Flex container with padding.

<LayoutBoxV2 />
<CodeBlock>{LayoutBoxV2Code}</CodeBlock>

<LayoutBoxV3 />
<CodeBlock>{LayoutBoxV3Code}</CodeBlock>

Test for BoxV3. Here the <Code>padding</Code> prop uses the new template literal
feature available in TypeScript v4.1.

### Center

Center content respecting the content margin set on each viewport.

<LayoutCenter />
<CodeBlock>{LayoutCenterCode}</CodeBlock>

### Stack

Vertical grid container.

<LayoutStack />
<CodeBlock>{LayoutStackCode}</CodeBlock>

### Switcher

Used to separate 2 or more blocks horizontally on desktop and vertically on
mobile.

<LayoutSwitcher />
<CodeBlock>{LayoutSwitcherCode}</CodeBlock>

### Cluster

Used to inline content horizontally without wrapping.

<LayoutCluster />
<CodeBlock>{LayoutClusterCode}</CodeBlock>

### Grid

Used to make a grid of content horizontally or vertically.

<LayoutGrid />
<CodeBlock>{LayoutGridCode}</CodeBlock>
