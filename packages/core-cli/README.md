# core-cli

CLI for various purposes, automate actions, etc.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [core-cli](#core-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @newrade/core-cli
$ nr COMMAND
running command...
$ nr (-v|--version|version)
@newrade/core-cli/1.5.0 darwin-x64 node-v14.15.4
$ nr --help [COMMAND]
USAGE
  $ nr COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`nr commit [FILE]`](#nr-commit-file)
* [`nr figma-sync [FILE]`](#nr-figma-sync-file)
* [`nr gastby-start`](#nr-gastby-start)
* [`nr hello [FILE]`](#nr-hello-file)
* [`nr help [COMMAND]`](#nr-help-command)
* [`nr netlify-deploy`](#nr-netlify-deploy)
* [`nr reset-branches [FILE]`](#nr-reset-branches-file)

## `nr commit [FILE]`

call the commit script

```
USAGE
  $ nr commit [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ nr commit
```

_See code: [src/commands/commit.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/commit.ts)_

## `nr figma-sync [FILE]`

sync design tokens from figma file

```
USAGE
  $ nr figma-sync [FILE]

ARGUMENTS
  FILE  figma file id

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ nr figma-sync
```

_See code: [src/commands/figma-sync.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/figma-sync.ts)_

## `nr gastby-start`

run gatsby dev

```
USAGE
  $ nr gastby-start

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ nr gatsby:start

EXAMPLE
  $ nr gatsby:start
```

_See code: [src/commands/gastby-start.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/gastby-start.ts)_

## `nr hello [FILE]`

describe the command here

```
USAGE
  $ nr hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ nr hello
     hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/hello.ts)_

## `nr help [COMMAND]`

display help for nr

```
USAGE
  $ nr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `nr netlify-deploy`

deploy gatsby site with netlify

```
USAGE
  $ nr netlify-deploy

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ nr netlify:deploy

EXAMPLE
  $ nr netlify:deploy
```

_See code: [src/commands/netlify-deploy.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/netlify-deploy.ts)_

## `nr reset-branches [FILE]`

delete local branches that are merged on the origin

```
USAGE
  $ nr reset-branches [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ nr resetbranches
```

_See code: [src/commands/reset-branches.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.5.0/src/commands/reset-branches.ts)_
<!-- commandsstop -->
