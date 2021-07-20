---
name: Netlify Functions
description: Knowledge base on how we use netlify functions.
deprecated: true
tags:
  - dev-ops
  - serverless
---

<DocHeader props={props}/>

> **Important note as of January 2021:** We are no longer recommending Netlify
> to deploy functions, please see how to deploy functions on Vercel
> [here](/core-docs/deploy).

## Manual deploy

To do a manual deployment for the test purpose of the netlify functions you will
have to install the netlify Cli

- https://docs.netlify.com/cli/get-started/

```
netlify deploy --prod
```

## netlify.toml

The `netlify.toml` config file is used to redirects the app/api and to give the
path of the build functions

- https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file
- https://docs.netlify.com/routing/redirects/rewrites-proxies/#custom-headers-in-proxy-redirects

```toml
 [dev]
     command = "yarn typecheck"
     # path to functions
     functions = "functions"

 [build]
     command = "#"
     publish = "public/"
     # path to functions
     functions = "public/functions/"

 [[redirects]]
     from = "/api/server/*"
     to = "/.netlify/functions/server"
     status = 200
     force = true
```

At the time of using netlify, there is a problem with redirects in
`netlify.toml`, the workaround is to use a `_redirect` file:

```txt
/api/server/*  /.netlify/functions/server 200
```

## Resources

- **`netlify` cli reference:** https://docs.netlify.com/cli/get-started/
- **Testing Headers playground:** https://play.netlify.com/redirects
- **Logs:** https://docs.netlify.com/functions/logs/
- **Events:** https://docs.netlify.com/functions/trigger-on-events/
- **Background Functions:**&nbsp;
  https://docs.netlify.com/functions/background-functions/
