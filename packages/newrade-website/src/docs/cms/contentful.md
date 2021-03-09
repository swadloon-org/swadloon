# Contenful CMS

## Overview

```mermaid
graph LR
  cms-setup[Contentful Models]
  cms[Contentful Data]
  cms-setup --> gatsby[Gatsby Transform data]
  cms --> gatsby[Gatsby]
  gatsby --> website[Website]
```

### Editor Interface

https://www.contentful.com/developers/docs/concepts/editor-interfaces/
