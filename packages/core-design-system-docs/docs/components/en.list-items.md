---
title: List Items
description:
  Lists are vertical groupings of text with either a number or a bullet.
tags:
  - molecule
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
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

<DocHeader props={props}/>

## Unordered Items

### Bullet

Bullet list items are used to list elements without any specific order.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true} 
  filename={'list-items-bullet.code.tsx'} 
  code={ListItemsBulletCode}>
  <ListItemsBullet />
</ThemeWrapper>

### Icon

Icons can be used instead of bullet points to list elements.

<ThemeWrapper>
<ListItemsIcon />
</ThemeWrapper>
<CodeBlock>{ListItemsIconCode}</CodeBlock>

### Size

Four sizes are available for list items.

<ThemeWrapper>
<ListItemsSizes />
</ThemeWrapper>
<CodeBlock>{ListItemsSizesCode}</CodeBlock>

### Multi-lines

Multi-lines list items are always align to item on the right.

<ThemeWrapper>
<ListItemsMultiLine />
</ThemeWrapper>
<CodeBlock>{ListItemsMultiLineCode}</CodeBlock>

## Ordered

Ordered list items are used to list elements with a specific order.

### Number

<ThemeWrapper>
<ListItemsNumber />
</ThemeWrapper>
<CodeBlock>{ListItemsNumberCode}</CodeBlock>
