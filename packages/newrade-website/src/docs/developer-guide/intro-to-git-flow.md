---
name: Intro to Git Flow
description:
tags:
---

# Intro to Git Flow

Git flow is a strategy made to help the development and release management of
applications. This methodology is suited for large teams, and scalable projects.

- Develop branch has the new features: Develop is created from master and edited
  by creating feature branches from develop, the feature branches are merged
  back to develop (without rebasing), finally the feature branch is deleted.

- Master branch is the production branch: A release branch is created from
  developm, fixes are made directly into this branch or by using fix branches,
  when ready the release branch is merged back to develop and to master (without
  rebasing), finally the release branch is deleted (yes deleted!).

Note: Only master and develop branches are permanent and the rest of the
branches (release, feature, hotfix, fix) have a end of life (see Git Flow
branches section). To preserve the history use merge (or pull) without rebase,
**we avoid the use of rebase to preserve the complete history**.

### Advantages of Git flow:

Code:

- Parallel development of features.
- Release is isolated from development(stability of releases).
- Support for production code and inclusion ofemergency fixes into development.
- Well known and documented methodology
- Convention for Branch names.
- Merging steps are normallized and included on different extensions.
- Extensions are available for different platforms and IDE.

## Git Flow branches

Basically Git flow have **2 long-running branchs**: **master** and **develop**.
At the monorepo each application (non core) as a master and develop named as
follow:

- /your-application-name/master
- /your-application-name/develop.

There are **3 topic branches: Feature, Release, Hotfix**. An alternative branch
named Support is not covered by Git flow and we are not using it on our
development.

#### Master: Original branch, this is the branch for production

Stable code, all code had being tested at different levels: development,
release, bugfixing and production itself.

1.  Normally your origin branch, if not, rename it.
2.  Branch name convention: master.
3.  **No commits directly into this branch**. Committing directly on master
    breaks the flow (so why to use git flow?), this can introduce errors that
    are not catched in development and makes difficult to trace stable versions.
4.  Indirect modifications using **Hotfix** and**Release** branches, difference
    explained futher on this documentation.

End of life: NO.

#### Develop: Derivate from master, this is the main branch for the modifications.

(your-application-name/develop is derivative from your-application-name/master)

Unstable code, this is used to merge all features and fixes found before
preparing a release.

1. Create new branch from master (once).
2. Branch name convention: develop.
3. Direct modifications allowed only for debugging. Directly used for small
   commits.
4. Indirect modifications using **Feature** and **Release**.

**End of life:** NO.

#### Feature: Derivate from develop, this is used to create each feature

Usefull for parallel and isolated development of features.

1. Create new branch from develop.
2. Branch name convention includes a folder name and the name of the feature
   that can be optional, but must make sens with the feature:
   feature/[featureName]
3. Direct modifications allowed.
4. Direct modifications on the branch release are allowed but it is recomended
   to create a derivative branch from release when the fix is not quick (e.g.
   fix affect more than one file)

**End of life:**

5. Merge into **develop**.
6. Branch **feature** to be **deleted from origin and locally**.

#### Release: Derivate from develop, this is used to create a production

version (your-application-name/release is derivative from
your-application-name/develop).

Make a release branch ensures stability for the next release, avoiding
introduction of new issues comming from development. This is a way to accelerate
the time passed to fix issues and is part of good practices in management (we
deliver a number of features by release). Release must be planned by management
to include only what will be delivered.

1. Create new branch from develop.
2. Branch name convention includes a folder name, the **name of the release is
   not optional**, by convention this name is semantic versionned (SEMVER):
   release/[MAJOR.MINOR.PATCH].
3. Direct modifications on the branch release are allowed but it is recomended
   to create a derivative branch from release when the fix is not quick (e.g.
   fix affect more than one file)

**End of life:**

4. Merge into **develop** and then to **master**. This allows a last merging
   revision, ensuring master to be clean.
5. Branch **release** to be **deleted from origin and locally**
6. Tag master branch with the Semver name of the release (do not include the
   name "release/").
