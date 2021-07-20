---
name: How to Create Packages
description:
tags:
---

# How to Create Packages

To create a new package, first open the `terminals.json` file

Create a new Package:

For Web or App Packages of the Company:

```bash
  {
      "name": "company-website",
      "cwd": "./packages/company-website",
      "open": true,
      "focus": false,
      "command": "yarn start",
      "execute": false
    },
```

or

For Design System Packages of the Company:

```bash
    {
      "name": "company-design-system",
      "cwd": "./packages/company-design-system",
      "open": true,
      "focus": false,
      "command": "yarn start",
      "execute": false
    },

```

Create new file in `newrade.code-workspace` file

For Web of App Packages of the Company

```bash
    {
      "name": "company-design-system",
      "path": "../packages/company-design-system"
    },
```

or

For Design System Packages of the Company:

```bash
    {
      "name": "company-website",
      "path": "../packages/company-website"
    },
```

Copy/Paste all the files from other recent company in the new file
