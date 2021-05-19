---
name: List Items
description:
tags:
  - test
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

<ThemeWrapper>
<ListItemsBullet />
</ThemeWrapper>
<CodeBlock>{ListItemsBulletCode}</CodeBlock>

### Icon

<ThemeWrapper>
<ListItemsIcon />
</ThemeWrapper>
<CodeBlock>{ListItemsIconCode}</CodeBlock>

### Size

<ThemeWrapper>
<ListItemsSizes />
</ThemeWrapper>
<CodeBlock>{ListItemsSizesCode}</CodeBlock>

### Multi-lines

<ThemeWrapper>
<ListItemsMultiLine />
</ThemeWrapper>
<CodeBlock>{ListItemsMultiLineCode}</CodeBlock>

## Ordered

### Number

<ThemeWrapper>
<ListItemsNumber />
</ThemeWrapper>
<CodeBlock>{ListItemsNumberCode}</CodeBlock>
