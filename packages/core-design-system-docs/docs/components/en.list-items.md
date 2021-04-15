---
name: Accordions
tags:
  - test
---

<!-- CODE IMPORTS -->

import { ListItemsBullet } from '../../src/code/list-items-bullet.code';
import ListItemsBulletCode from '!!raw-loader!../../src/code/list-items-bullet.code.tsx';

import { ListItemsIcon } from '../../src/code/list-items-icon.code';
import ListItemsIconCode from '!!raw-loader!../../src/code/list-items-icon.code.tsx';

import { ListItemsSizes } from '../../src/code/list-items-sizes.code';
import ListItemsSizesCode from '!!raw-loader!../../src/code/list-items-sizes.code.tsx';

import { ListItemsMultiLine } from '../../src/code/list-items-multi-lines.code';
import ListItemsMultiLineCode from '!!raw-loader!../../src/code/list-items-multi-lines.code.tsx';

import { ListItemsNumber } from '../../src/code/list-items-number.code';
import ListItemsNumberCode from '!!raw-loader!../../src/code/list-items-number.code.tsx';

<!-- END CODE IMPORTS -->

## Unordered Items

### Bullet

<ListItemsBullet />
<CodeBlock>{ListItemsBulletCode}</CodeBlock>

### Icon

<ListItemsIcon />
<CodeBlock>{ListItemsIconCode}</CodeBlock>

### Size

<ListItemsSizes />
<CodeBlock>{ListItemsSizesCode}</CodeBlock>

### Multi-lines

<ListItemsMultiLine />
<CodeBlock>{ListItemsMultiLineCode}</CodeBlock>

## Ordered

### Number

<ListItemsNumber />
<CodeBlock>{ListItemsNumberCode}</CodeBlock>
