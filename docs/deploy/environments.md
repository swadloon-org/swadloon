---
name: Environments
description:
tags:
  - dev-ops
---

<DocHeader props={props}/>

The environment called `blue` is not to be considered as the absolute master
used in the project. The concept is to switch between `blue` and `green` during
deployment.

`blue` and `green` are only labeled as so as an exemple.

<img src="./diagram1.png" width="75%" height="auto"/>

In this diagram `blue` is considered as the master at the start of the project
as it is used for all the major branches.

<img src="./diagram2.png" width="75%" height="auto"/>

In this part, the `dev` branch switches to the `green` environment while all the
other branches stay on `blue`. This prevents the problems happening in the
`green` environment to affect the staging and the production websites which are
still linked to the `blue` environment.

<img src="./diagram3.png" width="75%" height="auto"/>

Once the `green` environment is stable and the `dev` branch has been merged into
the master then we can change the master's environment to `green`.
