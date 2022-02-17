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

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true} 
  filename={'list-items-icon.code.tsx'} 
  code={ListItemsIconCode}>
  <ListItemsIcon />
</ThemeWrapper>

### Size

Four sizes are available for list items.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true} 
  filename={'list-items-sizes.code.tsx'} 
  code={ListItemsSizesCode}>
  <ListItemsSizes />
</ThemeWrapper>

### Multi-lines

Multi-lines list items are always align to item on the right.

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true} 
  filename={'list-items-multi-line.code.tsx'} 
  code={ListItemsMultiLineCode}>
  <ListItemsMultiLine />
</ThemeWrapper>

## Ordered

Ordered list items are used to list elements with a specific order.

### Number

<!-- prettier-ignore -->
<ThemeWrapper
  displayControls={true} 
  filename={'list-items-number.code.tsx'} 
  code={ListItemsNumberCode}>
  <ListItemsNumber />
</ThemeWrapper>
