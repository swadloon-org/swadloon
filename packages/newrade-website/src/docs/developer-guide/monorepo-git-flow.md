# Monorepo Git Flow

## Introduction

Here you will found a short introduction to Git flow and the implementation we use for the monorepo, if you want to know more about git flow please refer to <Link to="/docs/0-getting-started---10-intro-to-git-flow-">Intro To Git Flow</Link>.

The minimum to read before starting a new project is found at <Link to="/docs/0-getting-started---2-monorepo-git-flow-#starting-a-new-application-from-monorepo">Starting a new application from monorepo</Link>

### Git flow

Git flow is a git strategy made to help the development and delivery of applications. The permanent branches are develop and master.

### Branches for the core packages

The monorepo project (ai-ui) includes different applications as packages (ai-ui/packages/). The applications with prefix core- are the shared applications: core-\* packages e.g. core-ui, core-yo-generator, core-...

The possible branches for core packages are:

- master -> prod (https://ui.cdpq.com)
- develop -> development branch (https://dev-ui.cdpq.com)
- release/1.0.0 - > release candidate (can be deployed in pre prod) (https://preprod-ui.cdpq.com)
- feature/A
- feature/B
- fix/bug-fix-button
- hotfix/1.0.1

Note: release, feature, fix and hotfix are folders. In git folders are made by using "/" after the name of the folder, e.g: If you want to create a release 1.0.0 you will do:

```bash
git checkout -b release/1.0.0
```

<!-- TODO:  explain Lerna managing semver naming-->

### Starting a new application from monorepo

Prerequisites:

- Install developer environment described at "How to Develop on Docker Container with VS Code Remote Server Extension"

- Clone ai-ui project

Procedure:

- Checkout master branch

```bash
git checkout master
```

To separate development of new applications from other apps it is necessary to create a folder in your git tree (let say the folder will be named "your-application-name").
Git folders are made by putting a slash "/" after the name (your-application-name/), in the example below we create the branch master under the folder your-application-name:

```bash
git checkout -b your-application-name/master
```

We do the same for each branches needed for the application development (e.g. develop).

As we are using Git flow, the possible branches for your-application-name are:

<!-- TODO: to test if two folder levels is possible, e.g. your-application-name/release/ -->

- your-application-name/master -> prod (https://ui.cdpq.com)
- your-application-name/develop -> development branch (https://dev-ui.cdpq.com)
- your-application-name/release/1.0.0 - > release candidate (can be deployed in pre prod) (https://preprod-ui.cdpq.com)
- your-application-name/feature/A
- your-application-name/feature/B
- your-application-name/fix/bug-fix-button
- your-application-name/hotfix/1.0.1

## Work Flow: create features and release them to production

**New app**: create your-application-name/develop branch from your-application-name/master
your-application-name/master --> your-application-name/develop;

```bash
git checkout your-application-name/master
git checkout -b your-application-name/develop
```

**Create feature**: create your-application-name/feature/A branch from your-application-name/develop:
your-application-name/develop --> your-application-name/feature/A;

```bash
git checkout your-application-name/develop
git checkout -b your-application-name/feature/A
```

**Finish feature**: merge your-application-name/feature/A to your-application-name/develop
your-application-name/feature/A --> your-application-name/develop;

```bash
git checkout your-application-name/develop
git merge your-application-name/feature/A
```

Delete your-application-name/feature/A

```bash
git checkout your-application-name/develop
git branch -D your-application-name/feature/A
git push
```

**Create release (release canditate)**: create your-application-name/release/1.0.0 branch from your-application-name/develop:
your-application-name/develop --> your-application-name/release/1.0.0;

<!-- TODO: test tags names for release, see how it works with lerna. do we need a prefix for the version? e.g. your-application-name/release/your-application-name@1.0.0-->

Note: on this example the release is 1.0.0

```bash
git checkout your-application-name/develop
git checkout -b your-application-name/release/1.0.0
```

**Release to production**: merge your-application-name/release/1.0.0 to your-application-name/develop and your-application-name/master (tag the release version).

<!-- TODO: see how it works taging with lerna -->

your-application-name/release/1.0.0 --> your-application-name/develop;
your-application-name/release/1.0.0 --> your-application-name/master;

```bash
git checkout your-application-name/develop
git merge your-application-name/release/1.0.0
git checkout your-application-name/master
git push origin master --tag
git merge your-application-name/release/1.0.0
```

Delete your-application-name/release/1.0.0

```bash
git checkout your-application-name/develop
git branch -D your-application-name/release/1.0.0
git push
```

**Create hotfix**: create your-application-name/hotfix/1.0.1 branch from your-application-name/master (hotfix != feature fixes, see <Link to="/docs/0-getting-started---10-intro-to-git-flow-">Intro To Git Flow</Link>).
your-application-name/master --> your-application-name/hotfix/1.0.1;

<!-- TODO: see how it works taging with lerna -->

```bash
git checkout your-application-name/master
git checkout -b your-application-name/hotfix/1.0.1
```

**Finish hotfix**: merge your-application-name/hotfix/1.0.1 to your-application-name/master and your-application-name/develop (tag the release version).

your-application-name/hotfix/1.0.1 --> your-application-name/master;
your-application-name/hotfix/1.0.1 --> your-application-name/develop;

```bash
git checkout your-application-name/master
git push origin master --tag
git merge your-application-name/hotfix/1.0.1
git checkout your-application-name/develop
git merge your-application-name/hotfix/1.0.1
```

Delete your-application-name/hotfix/1.0.1

```bash
git checkout your-application-name/develop
git branch -D your-application-name/hotfix/1.0.1
git push
```

### Example of development flow

This is an example about how a core package is updated and how non-core packages can be updated.

-**"Dev1"** represent a developper working on core-packages. -**"Dev2"** a developper working in a new application.

Core Packages (before update)

core-docs-generator 1.0.0
core-utils 1.0.0
core-ui-lib 1.0.0
core-webpack-config 1.0.0

Dev1 is working /feature/core-ui-lib-add-button-component (that will go to core-ui-lib)
Dev2 is working on a new application (non core package)

Dev2 creates the package application-name (from master??)

Dev2 create branches:

- your-application-name/master
- your-application-name/develop
- your-application-name/release

Dev2 work on adding more features /your-application-name/feature/add-ui

Dev2 is ready for a release

Dev2 merges features into /your-application-name/develop

Dev1 releases new UI components in core-ui-lib 1.1.0 (feature -> develop -> release -> master)

Core Packages (after update): Note that even if Dev1 work only on core-ui-lib, all the versions of the packages are updated.

core-docs-generator 1.0.1
core-utils 1.0.1
core-ui-lib 1.1.0 + CHANGELOG
core-webpack-config 1.0.1

Dev2 needs the new UI components

Dev2 see the release notes on master, decides to upgrade the core packages

Dev2 creates your-application-name/feature/upgrade-core-packages

git checkout your-application-name/develop
git checkout -b your-application-name/feature/upgrade-core-packages

git pull origin master (equivalent to git fetch + git merge)

Dev2 now has application-name pacakges that has the latest stable core-\* packages

Dev2 tests the new changes

everything is good

Dev2 merges the feature branch into your-application-name/develop

Dev2 prepare a release on your-application-name/release

application-name with version 1.23.0

Dev2 release to your-application-name/master
