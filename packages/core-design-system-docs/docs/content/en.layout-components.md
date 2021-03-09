---
name: Layout Components
tags:
  - test
---

<!-- CODE IMPORTS -->

import { LayoutBoxV2 } from '../../src/code/content/layout-components/box-default.code';
import LayoutBoxV2Code from '!!raw-loader!../../src/code/content/layout-components/box-default.code.tsx';

import { LayoutBoxV3 } from '../../src/code/content/layout-components/box-padding.code';
import LayoutBoxV3Code from '!!raw-loader!../../src/code/content/layout-components/box-padding.code.tsx';

import { LayoutCenter } from '../../src/code/content/layout-components/center.code';
import LayoutCenterCode from '!!raw-loader!../../src/code/content/layout-components/center.code.tsx';

import { LayoutCluster } from '../../src/code/content/layout-components/cluster.code';
import LayoutClusterCode from '!!raw-loader!../../src/code/content/layout-components/cluster.code.tsx';

import { LayoutGrid } from '../../src/code/content/layout-components/grid.code';
import LayoutGridCode from '!!raw-loader!../../src/code/content/layout-components/grid.code.tsx';

import { LayoutStack } from '../../src/code/content/layout-components/stack.code';
import LayoutStackCode from '!!raw-loader!../../src/code/content/layout-components/stack.code.tsx';

import { LayoutSwitcher } from '../../src/code/content/layout-components/switcher.code';
import LayoutSwitcherCode from '!!raw-loader!../../src/code/content/layout-components/switcher.code.tsx';

<!-- END CODE IMPORTS -->

## Layout Components

Reusable and responsive primitive layout components.

### Box

Flex container with padding.

<LayoutBoxV2 />
<CodeBlock>{LayoutBoxV2Code}</CodeBlock>

<LayoutBoxV3 />
<CodeBlock>{LayoutBoxV3Code}</CodeBlock>

Test for BoxV3. Here the <Code>padding</Code> prop uses the new template literal feature available in TypeScript v4.1.

### Center

Center content respecting the content margin set on each viewport.

<LayoutCenter />
<CodeBlock>{LayoutCenterCode}</CodeBlock>

### Stack

Vertical grid container.

<LayoutStack />
<CodeBlock>{LayoutStackCode}</CodeBlock>

### Switcher

Used to separate 2 or more blocks horizontally on desktop and vertically on mobile.

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
