---
name: Documentation for Core Packages
description:
  A collection of methodologies, libraries and utilities to design and build
  (serverless) website and apps.
tags:
  - overview
---

<DocHeader props={props}/>

## Overview

> [Newrade](https://newrade.ca/) is a firm that specializes in building
> high-quality website and apps for enterprises.

We (Newrade) maintain an open source stack of methodologies, libraries and other
utilities that we use to **design**, **build**, **deploy** and **monitor**
high-quality websites and apps.

The project is organized in 2 main parts:

- **A monorepository** containing all source files, packages, and documentation
  hosted on Github:
  [github.com/newrade/newrade-core](https://github.com/newrade/newrade-core)
- **A reference design system and UI library** called
  [Ze Design System](http://zedesignsystem.com/)

The monorepository and its packages can be use to create your own design system,
websites and apps. If you want to know more, check the
[Get Started](#get-started) section below.

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

## Get Started

The main way to use our work for your project is to create a fork of the
newrade-core repository and then add your packages (websites and apps) to it.
This is details in the guide.

## Principles

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

## Tech

Designing and building apps efficiently requires a number of tools, frameworks
and other technologies, and choosing the _right_ ones can make of break any tech
project.

We use techs that are widely used and adopted by the industry. If they are open
source software, then we choose products that:

- are supported by compagnies who have a sizable investment in it;
- and have an active and vibrant community using the project;

<b>Design</b>

- **Editor:** [Figma](), and Illustrator for graphic work

<b>Development</b>

- **Languages:** JavaScript, TypeScript, CSS, HTML, SVG
- **Editor:** [VSCode]()

<b>Cloud</b>

- **CI/CD:** Github Actions
- **VPS/VM (for CI/CD):** [Vultr](https://vultr.com)
- **DNS,CDN:** Vercel
- **Hosting (static content):** Vercel
- **Hosting (APIs):** Vercel
- **Monitoring (logs):** Datadog
- **Monitoring (alerts):** Datadog, [Checkly](https://www.checklyhq.com/)
- **Alerting:** Datadog, Slack

## Architecture

| Package name  |  Description  | License |
| ------------- | :-----------: | ------- |
| core-react-ui | right-aligned | MIT     |

## Design Process

#### Definition

#### Methodologies

## Building Website and Apps

#### Technologies

## Deploying to the Cloud

## Monitoring

## Guides

We have several in-depth guides that covers specific subjects.
