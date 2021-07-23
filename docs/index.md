---
subject: Introduction
title: Documentation Overview - 🏔
description:
  A collection of methodologies, libraries and utilities to design and build
  (serverless) website and apps.
---

<DocHeader props={props}/>

## Overview

We ([Newrade](https://newrade.ca/)) maintain an open source stack of
methodologies, libraries and other utilities that we use to **design**,
**build**, **deploy** and **monitor** high-quality websites and apps.

The project is organized in 2 main parts:

- **A monorepository** containing all source files, packages, and documentation
  hosted on Github:
  [github.com/newrade/newrade-core](https://github.com/newrade/newrade-core)
- **A reference design system and UI library** called
  [Ze Design System](http://zedesignsystem.com/)

The monorepository and its packages can be use to create your own design system,
websites and apps.

> Want to know how to use this project for your own website or apps right away?
> Skip to the [Get Started](/core-docs/get-started/) section to learn more.

We will go over **what** this project is, **why** we needed it in the first
place, **who** is it for and finally **how** it helps to solve some of the
problems.

## Motivation

Designing, developing, deploying and monitoring fully-featured websites and apps
is not an easy task.

Your company's brand evolves, the tech stacks changes, and your team keep adding
new features your websites and apps.

### Goals & Non-Goals

With this in mind, we identify our primary goals:

<ul>
  <li data-custom-bullet="🎯"><strong>Facilitate</strong> the design phase with clear guidelines on how to use Figma</li>
  <li data-custom-bullet="🎯"><strong>Provides</strong> the design phase with clear guidelines on how to use Figma</li>
</ul>

What we don't cover or work with in this project:

<ul>
  <li data-custom-bullet="⛔️">Databases</li>
  <li data-custom-bullet="⛔️">Business logic</li>
</ul>

### Principles

Our view is that _documentation_ (e.g. readme, design specs, libraries
documentation...) is the most important aspect of any project.

From our experience, we found out that things usually goes wrong very quickly in
projects that have no proper documentation, namely:

- requirements are too vague which leads to inadequate solutions
- crucial information is lost at various stage of the project
- sizable amount of time and energy are wasted on repeated communication
- maintenance costs explose after some time

To counter this, we wrote six guiding principles that we apply to our projects'
documentation:

<ul>
  <li data-custom-bullet="🌐"><strong>The documentation needs to be online</strong> the documentation does not <em>exist</em>
  &nbsp;if only developers can access it in sources files, it needs to be presented
  online with clear and recognizable urls (e.g. at company.com/docs).</li>

  <li data-custom-bullet="🔎"><strong>The documentation needs to be searchable</strong> A full text search of
the documentation must be available on any device and must support locales,
keywords, tags.</li>

  <li data-custom-bullet="✍️"><strong>The documentation needs to be editable</strong> The documentation must
be editable at all time with online tools (e.g. Github) and by people that are
not developers.</li>

  <li data-custom-bullet="♿️"><strong>The documentation needs to be accessible</strong> All must be done to
present the documentation with respect to accessibility standards.</li>

  <li data-custom-bullet="👂"><strong>The
documentation needs to be localized</strong> The documentation must provide a
way to localize all content in different languages.</li>

  <li data-custom-bullet="📲"><strong>The documentation needs to be interactive</strong> When possible, the
documentation needs to present live example of code or design elements and avoid
using screenshots that are usually out of date pretty quickly.</li>
</ul>

## Development Process

We outline our methodology in our
[Development Process](/core-docs/development-process/) section.

## Tech

We describe what tech we use to design and develop applications in the
[Tech](/core-docs/tech/) section.

## Architecture

To learn about the organization of the monorepo and the role of each package,
head over to the [Architecture](/core-docs/architecture/) section.

## Licence

All packages, design and associated work in this projet are MIT licensed.

See [LICENSE.md](https://github.com/newrade/newrade-core/blob/master/LICENSE.md)
