---
subject: Introduction
title: Project Overview - 🏔
description:
  Our methodology, libraries and utilities to design and build (serverless)
  website and apps.
---

<DocHeader props={props}/>

## Introduction

At [Newrade](https://newrade.ca/), we **design**, **build**, **deploy** and
**monitor** websites and apps for ourselves and for our clients.

Sometimes we design and build projects from the ground up, sometimes we help
with just a few specific steps along the way.

Many of our clients needs to start somewhere and we are often asked to give a
development process to cover every step from an idea to a finished product.

In order to make our process **better** and more **open**, we have documented:

1. How we work through the development process of building apps and websites to
   help users achive their goals;
1. How we build websites and apps using modern tech;
1. What tech do we use

In addition to our development process, we have open sourced packages that we
use to code our websites and applications, automate our work and support our
activities.

### What is this project for?

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

## Development Process

We outline our methodology in our
[Development Process](/core-docs/development-process/) section.

The project consist of the following parts:

<ul>
  <li data-custom-bullet="🎭">
    <strong>Our UX design methodology</strong>
  </li>
  <li data-custom-bullet="🎨">
    <strong>The Ze Design System</strong>
  </li>
  <li data-custom-bullet="🎛️">
    <strong>A React UI library based on our design system</strong>
  </li>
  <li data-custom-bullet="💻">
    <strong>newrade-core</strong> our mono-repo containing all source files, packages, and
  documentation hosted on Github (<a href={'https://github.com/newrade/newrade-core'}>github.com/newrade/newrade-core</a>)
  </li>
</ul>

The monorepository and its packages can be use to create your own design system,
websites and apps.

## Tech

We describe what tech we use to design and develop applications in the
[Tech](/core-docs/tech/) section.

## Architecture

To learn about the organization of the monorepo and the role of each package,
head over to the [Architecture](/core-docs/architecture/) section.

## Licence

All packages, design and associated work in this projet are MIT licensed.

See [LICENSE.md](https://github.com/newrade/newrade-core/blob/master/LICENSE.md)

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
