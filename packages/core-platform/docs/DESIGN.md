# Swadloon Platform

## Design Goals

### A) Create a simple website

Steps:

1.  Sign up (name of org/company) (e.g. "company")
2.  Create project (default project already created)
3.  Create site ("company.swadloon.com")
4.  Pick style (available DS themes)
5.  Visit site ("company.swadloon.com")
6.  Edit content ("company.swadloon.com/\_/platform/site/1234/edit")
7.  Done

### B) Create a complex website

Steps:

1.  Sign up (name of org/company) (e.g. "company")
2.  Create project (default already created)
3.  Create site ("company.swadloon.com")
4.  Pick style (available DS themes)
5.  Edit theme in DS editor
6.  Visit site ("company.swadloon.com")
7.  Edit content ("company.swadloon.com/\_/platform/site/1234/edit")
8.  Done

### C) Create and configure a design system

Steps:

1.  Sign Up
2.  Create project
3.  Create DS
4.  Edit DS
5.  Preview on default website or design system website
    ("company.swadloon.com/design-system")
6.  Export tokens ("company.swadloon.com/\_/platform/ds/1234/tokens")

### D) Create and configure a design system for Figma

Steps:

1.  Sign Up
2.  Create project
3.  Create DS
4.  Edit DS
5.  Open Figma, create new file
6.  Open Figma plugin
7.  Auth plugin + assign figma file to project
8.  Create DS with plugin (connected to Project and its DS)

## Sitemap

| Page                   | Route (URL)                                           |
| ---------------------- | ----------------------------------------------------- |
| Landing                | swadloon.com                                          |
| Features               | swadloon.com/pricing                                  |
| Open Source            | swadloon.com/open-source                              |
| Pricing                | swadloon.com/pricing                                  |
| Docs                   | swadloon.com/docs                                     |
| Design System Showcase | swadloon.com/design-system                            |
| Platform               | tenant.swadloon.com/\_/platform                       |
| Auth                   | tenant.swadloon.com/\_/platform                       |
| Sign Up                | tenant.swadloon.com/\_/platform/auth/sign-up          |
| Sign In                | tenant.swadloon.com/\_/platform/auth/sign-in          |
| User                   | tenant.swadloon.com/\_/platform/user/[id]/profile     |
| Organization           | tenant.swadloon.com/\_/platform/org/[id]/settings     |
| Project                | tenant.swadloon.com/\_/platform/project/[id]/settings |
| DS                     | tenant.swadloon.com/\_/platform/ds/[id]/              |
| DS Typography          | tenant.swadloon.com/\_/platform/ds/[id]/typography    |
| DS Colors              | tenant.swadloon.com/\_/platform/ds/[id]/colors        |
| DS Tokens              | tenant.swadloon.com/\_/platform/ds/[id]/tokens        |
| Integrations           | tenant.swadloon.com/\_/platform/integrations          |
| Figma                  | tenant.swadloon.com/\_/platform/integrations/figma    |
| Github                 | tenant.swadloon.com/\_/platform/integrations/github   |
| Site CMS               | tenant.swadloon.com/\_/platform/site/[id]/settings    |
| Site 1                 | site-1.tenant.swadloon.com                            |
| DS for site 1          | site-1.tenant.swadloon.com/design-system              |
| Site 2                 | site-2.tenant.swadloon.com                            |
| Site 3                 | site-3.tenant.swadloon.com                            |
