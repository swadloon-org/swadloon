---
title: Website API Overview
description:
  Simple models, types and enums to build structured content for websites and
  apps.
tags:
  - structured-content
  - website-api
---

<!-- CODE IMPORTS -->

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

## Introduction

> This section documents the `core-website-api` package which includes several
> models and constants commonly used in websites and apps.

> **Note:** If you use only _low level components_ like buttons, text, and
> inputs. You won't need to use the Website API.

Websites and applications have multiple content types that they need to organize
and present to users. Some objects/models are very specific to the site's topics
(e.g. a finance app might use a stock model which contains specific properties)
but other are fairly common across websites.

For example, all websites usually have:

- pages (or views, usually with unique URLs)
- sections in pages
- different type of content placed in sections
- tags used to categorize content
- navigation objects (links, menus, footers)
- company infos
- and so on...

What we want, is to avoid reinventing commonly used models every time we
assemble a new website.

After being defined, all of those content types and models needs to be rendered
in pages, sections and then with components.

While low level (or "dumb") components like Buttons and Inputs, are not aware of
how content is organized for a page or a section, we can design higher level
components that _are_ aware of a whole page's content structure.

## Structured Content Models

To solve this proble, we have defined models that describe commonly used
content:

<ul>
  <li data-custom-bullet="🍽"><strong>Site (SiteAPI):</strong> - The Site model is a representation of a whole website. It is the
  highest level model, it contains company-wide informations, pages, and
  navigation objects. This "data" usually lives (as independent parts) inside a
  CMS (Content Management System).
  </li>

  <li data-custom-bullet="🍱"><strong>Page (PageAPI): </strong> - The Page model has properties like a title, name,
  unique URL, SEO data. A page holds one or many sections.
  </li>

  <li data-custom-bullet="🍣"><strong>Sections (SectionAPI): </strong> - Sections live inside pages. They
  contain themselves one or more blocks. Section are also in charge of creating
  the layout for the blocks.
  </li>

  <li data-custom-bullet="🍤"><strong>Block (BlockAPI): </strong> - Block models come in a variety of types. They
  can hold data for text, images, forms, maps or any data that needs to be
  rendered to users.
  </li>
</ul>

## Resources

- [What is Structured Content?](https://graphcms.com/academy/what-is-structured-content)
- [How structured content frees creative teams and unleashes their productivity](https://www.contentful.com/resources/structured-content-white-paper/)
