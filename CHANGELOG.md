# Change Log

All general changes to the repo or main dependencies will be documented in this
file. This files is written manually where as other changelogs in packages are
automated.

# (2021-07-08)

### Breaking changes

- **webpack:** upgrade to webpack v5 ()

rename import `webpack/declarations/WebpackOptions` to `webpack`

change import `import { WebpackOptions } from 'webpack';` to

`import { Configuration } from 'webpack';`

#### Gatsby

replaced https://github.com/Js-Brecht/gatsby-plugin-ts-config with
https://github.com/cometkim/gatsby-plugin-typegen/tree/master/plugin

remove gatsby from .env

use

```
flags: core.gatsbySiteFlags,
```

instead
