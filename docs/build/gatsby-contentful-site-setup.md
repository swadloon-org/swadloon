---
subject: Build
title: How to Setup a Gatsby Site with Contentful
description:
tags:
  - contentful
  - gatsby
  - react
  - website
  - development
status: draft
---

<DocHeader props={props}/>

## Prerequisites

- a new gatsby site to be deployed, i.e. the site is set up in
  `packages/a-new-site`
- a repository with the following branches: `dev`, `master` and `release`

## Definitions

- `<PACKAGE_NAME>` : package name in the repository (e.g. newrade-website)
- `<NAME>` : short name of the package / project

## Environments

| Environment | Branch  | Site Name                | Domain             |
| ----------- | ------- | ------------------------ | ------------------ |
| dev         | dev     | `<PACKAGE_NAME>-dev`     | `dev.<DOMAIN>`     |
| staging     | master  | `<PACKAGE_NAME>-staging` | `staging.<DOMAIN>` |
| production  | release | `<PACKAGE_NAME>-release` | `<DOMAIN>`         |

## Contentful

### Account Creation

1. Create the organization and create a new space

### Environments Setup

1. Go in the settings and select "Environments"
1. Create a new environment named `blue`.
1. Change the Environment alias (`master`) target for `blue`, then delete the
   `master` environment as it will not be needed anymore.
1. Create another environment named `green`.

<img src="https://user-images.githubusercontent.com/9644867/100551547-57191980-324f-11eb-8840-f61f120184a9.png" width="75%" height="auto"/>

### Locales

1. In Settings > Locale, switch the current language for the default one in the
   website, e.g. "fr-CA"
1. Add a second language, e.g. "en-CA" and make the default one the _fallback_
   to the second one.

### Content delivery / preview tokens

> The Content Delivery API (CDA), available at cdn.contentful.com, is a
> read-only API for delivering content from Contentful to apps, websites and
> other media. Content is delivered as JSON data, and images, videos and other
> media as files.

1. Create a new API key
1. Create an entry in 1Password for the site `<NAME> - Contentful`
1. Copy the `SpaceId` and the `Content Delivery API - access token` to 1Password
1. Also enable all environments for this API key

<img src="https://user-images.githubusercontent.com/9644867/100552918-618be100-3258-11eb-93d1-a42563afae85.png" width="75%" height="auto"/>

### Content management tokens

> Personal Access Tokens to use the Content Management API. These tokens are
> always bound to your individual account, with the same permissions you have on
> all of your spaces and organizations.

1. Create a new `Content management tokens` API key
1. Take note of the `Content management tokens`, the `space id` and the
   `Content Delivery API - access token`
1. Save it in 1Password under a `Content management tokens` section

<img src="https://user-images.githubusercontent.com/9644867/100552751-1fae6b00-3257-11eb-96a5-3af8d2052b93.png" width="75%" height="auto"/>

### Local Setup

In the corresponding package (e.g. packages/`<PACKAGE_NAME>`), create a
`.in the repository (e.g. newrade-website)env` file and set the Space ID, the
Content Delivery Token and the Management Token :

```bash
#
# App
#
APP_ENV=local
APP_DOMAIN=domain.com
APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=9003
#
# Figma
#
FIGMA_TOKEN=1234
FIGMA_FILE=1234
#
# Contentful
#
CONTENTFUL_SPACEID_<NAME>=1234
CONTENTFUL_DELIVERY_TOKEN_<NAME>=1234
#
# Contentful CLI
#
CONTENTFUL_MANAGEMENT_TOKEN_<NAME>=1234
```

## GitHub

### Secret Keys

1. On Github, go in Settings > Secrets
1. Set the `CONTENTFUL_SPACEID_<NAME>` and the
   `CONTENTFUL_DELIVERY_TOKEN_<NAME>`
1. Go in the file `.github/workflows/build-only.yml`
1. Add the same entries in the env section of the build:

```
CONTENTFUL_SPACEID_<NAME>: ${{ secrets.CONTENTFUL_SPACEID_<NAME> }}
CONTENTFUL_DELIVERY_TOKEN_<NAME>: ${{ secrets.CONTENTFUL_DELIVERY_TOKEN_<NAME> }}
```

## Gatsby Cloud

### Site Creation

1. Go on the Newrade organisation and choose "Add a Site+"
1. Select the option "Import from a Git repository".
1. Select GitHub

For each environment/branch:

1. The next form should look like this screenshot.
   ![image](https://user-images.githubusercontent.com/66572954/100552130-2b982e00-3253-11eb-9e41-8204567c8d70.png)
1. Skip the integration step
1. In "Site Settings", add the env variables, select the option "Bulk Add
   Variables" and insert:

```
APP_ENV=local
APP_DOMAIN=domain.com
APP_PROTOCOL=http
APP_HOST=localhost
APP_PORT=9003
CONTENTFUL_SPACEID_<NAME>=1234
CONTENTFUL_DELIVERY_TOKEN_<NAME>=1234
```

### Webhooks

TODO

## Netlify

Each Gatsby Cloud site is automatically deployed with Netlify.

1. You will have to use the automatic integration process of netlify on "Gatsby
   Cloud".
2. Select the current website in "Gatsby Cloud" by selecting the button "View
   details".
3. Under "Site Settings" > "Integrations" > "Hosting"
4. The last step is to "connect" Netlify and do the indicated steps.
