# Process to start a new project

## Contentful

- Create the organization and add a new space 
> Api keys and access tokens
- Go in the settings and select API keys.
- Create a new API key buy clicking the the blue button named "Add API key"
- Take note of the `content management Tokens` and `space id` and the `Content Delivery API - access token`

> Import
- Import all the content model from the core-contentful-lib OR insert by the UI all the new content models.
- Don't forget to use the `content management Tokens` and not the `Content Delivery API - access token`
>Translation
- In the section Settings in contentful select locale.
- Switch the current language for the default one in the website.
- Add the second language and make it a fallback to the main one.

## 1Password
- Add in a password template the  `space id` and the `Content Delivery API - access token` values.

## GitHub
> Secret keys
- Go in the setting section of the newrade repo. 
- The go in the sub section `Secrets`
- Add the `space id` and the `Content Delivery API - access token`
- Go in the file `.github/workflows/build-only.yml` with VsCode.
- Add the `space id` and the `Content Delivery API - access token` in the current file.

exemple
```
CONTENTFUL_ACCESS_SPACEID: ${{ secrets.CONTENTFUL_ACCESS_SPACEID }}
CONTENTFUL_ACCESS_TOKEN: ${{ secrets.CONTENTFUL_ACCESS_TOKEN }}
```

## Repo set-up

- copy paster de starter and change the different value for the current website name.
- create a .env files and add the current  `space id` and `Content Delivery API - access token`

## Gatsby Cloud

- Go on the newrade organisation and "Add a Site+".
