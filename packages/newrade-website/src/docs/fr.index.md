---
name: Docs
description: Overview of the documentation
tags:
  - hey
  - hey2
---

# Docs - FR

<CodeBlock className={'language-json'}>{JSON.stringify(props.pageContext, null, 2)}</CodeBlock>

<CodeBlock className={'language-json'}>{JSON.stringify(props.data.file.childMdx.frontmatter, null, 2)}</CodeBlock>
