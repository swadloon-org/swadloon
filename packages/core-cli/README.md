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
$ npm install -g core-cli
$ nr COMMAND
running command...
$ nr (-v|--version|version)
core-cli/1.1.0 linux-x64 node-v14.6.0
$ nr --help [COMMAND]
USAGE
  $ nr COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`nr figma-sync [FILE]`](#nr-figma-sync-file)
* [`nr hello [FILE]`](#nr-hello-file)
* [`nr help [COMMAND]`](#nr-help-command)
* [`nr reset-branches [FILE]`](#nr-reset-branches-file)

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

_See code: [src/commands/figma-sync.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.1.0/src/commands/figma-sync.ts)_

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

_See code: [src/commands/hello.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.1.0/src/commands/hello.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

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

_See code: [src/commands/reset-branches.ts](https://github.com/newrade/newrade-core/tree/master/packages/core-design-system/blob/v1.1.0/src/commands/reset-branches.ts)_
<!-- commandsstop -->
