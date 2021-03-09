---
name: Sections
tags:
  - test
---

<!-- CODE IMPORTS -->

import { SectionsDivider } from '../../src/code/content/sections/sections-divider.code';
import SectionsDividerCode from '!!raw-loader!../../src/code/content/sections/sections-divider.code.tsx';

import { SectionsPrimaryReversed } from '../../src/code/content/sections/sections-primary-reversed.code';
import SectionsPrimaryReversedCode from '!!raw-loader!../../src/code/content/sections/sections-primary-reversed.code.tsx';

import { SectionsPrimary } from '../../src/code/content/sections/sections-primary.code';
import SectionsPrimaryCode from '!!raw-loader!../../src/code/content/sections/sections-primary.code.tsx';

import { SectionsSecondary } from '../../src/code/content/sections/sections-secondary.code';
import SectionsSecondaryCode from '!!raw-loader!../../src/code/content/sections/sections-secondary.code.tsx';

import { SectionsSwitcher } from '../../src/code/content/sections/sections-switcher.code';
import SectionsSwitcherCode from '!!raw-loader!../../src/code/content/sections/sections-switcher.code.tsx';

<!-- END CODE IMPORTS -->

# Sections

Sections are high level components to organize content in pages. They have predefined layouts, each in a dedicated components. Content inside Sections should always be contained in one of the Blocks.

## Base Section Component

<!-- The base <Code>{`<Section/>`}</Code> component handles props that all other sections use. Those are: -->

### Examples

<SectionsPrimary />
<CodeBlock>{SectionsPrimaryCode}</CodeBlock>

<SectionsPrimaryReversed />
<CodeBlock>{SectionsPrimaryReversedCode}</CodeBlock>

<SectionsSecondary />
<CodeBlock>{SectionsSecondaryCode}</CodeBlock>

## Section Components

### The "Switcher"

2 columns layout that becomes 1 on mobile.

<SectionsSwitcher />
<CodeBlock>{SectionsSwitcherCode}</CodeBlock>

### The "Divider"

2 columns layout with the right one having no padding.

<SectionsDivider />
<CodeBlock>{SectionsDividerCode}</CodeBlock>
