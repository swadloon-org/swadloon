---
name: Markdown Elements
description:
tags:
  - markdown
---

export const lorenipsum =
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris esse cillum dolore eu fugiat nulla pariatur.`;

<DocHeader props={props}/>

## Content sectioning

> Content sectioning elements allow you to organize the document content into
> logical pieces. Use the sectioning elements to create a broad outline for your
> page content, including header and footer navigation, and heading elements to
> identify sections of content.
> [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)

### Headings

# Heading H1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris esse cillum dolore eu fugiat nulla
pariatur.

## Heading H2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris esse cillum dolore eu fugiat nulla
pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut

### Heading H3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut nisi ut aliquip ex ea commodo consequat.

#### Heading H4

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut nisi ut aliquip ex ea commodo consequat.

### Details & Summary

<details>
  <summary>Summary</summary>
  <p>{lorenipsum}</p>
</details>

---

## Text content

> Use HTML text content elements to organize blocks or sections of content
> placed between the opening `<body>` and closing `</body>` tags. Important for
> accessibility and SEO, these elements identify the purpose or structure of
> that content.
> [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content)

### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut nisi ut aliquip ex ea commodo consequat.

### Blockquotes

> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
> nostrud exercitation ullamco laboris in culpa qui officia deserunt mollit anim
> id est laborum
>
> > And, they can be nested

### Lists

#### Unordered

- List item
- List item
- List item

#### Ordered

1. List item
2. List item
3. List item
4. List item

#### Nested List

1. List item
   1. List item
   2. List item
2. List item
   1. List item
3. List item

#### Checkboxes

- [ ] lorenipsum
- [ ] lorenipsum
- [ ] lorenipsum
- [ ] lorenipsum

---

## Inline text semantics

> Use the HTML inline text semantic to define the meaning, structure, or style
> of a word, line, or any arbitrary piece of text.
> [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics)

### Links / Anchor

[Link](#id-goes-here)

[External Link](https://google.com)

### Text

Lorem <small>small</small> dolor <strong>sit</strong> amet, <b>consectetur</b>
adipiscing elit, sed do eiusmod tempor incididunt ut nisi ut aliquip ex ea
commodo consequat.

### Keyboard Keys

Please, input "<kbd>Yes</kbd>" or "<kbd>No</kbd>"

### Code

Inline `code`

```tsx
/**
 * Transform the Effects object into a CSS compatible one.
 */
export function getCSSEffects(options: Effects): Effects<string> {
  const effects = keys(options);
  return effects.reduce((previous, current) => {
    const shadows = options[current];
    const shadowsKey = keys(shadows);
    if (!previous[current]) {
      previous[current] = {} as Shadows<string>;
    }
    shadowsKey.forEach((shadow) => {
      previous[current][shadow] = getCSSBoxShadow(options[current][shadow]);
    });
    return previous;
  }, {} as Effects<string>);
}
```

```css
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
    url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
```

```json
{
  "a": "a",
  "b": "b"
}
```

### Abbreviations

The HTML specification is maintained by the W3C.

<!-- see https://github.com/prettier/prettier/pull/5749 -->

_[HTML]: Hyper Text Markup Language _[W3C]: World Wide Web Consortium

### Datalist

<input type="text" list="browsers" />
<datalist id="browsers">
  <option value="Firefox" />
  <option value="Chrome" />
  <option value="Internet Explorer" />
  <option value="Opera" />
  <option value="Safari" />
</datalist>

---

## Demarcating edits

Now some inline markup like _italics_, **bold**, and `code()`. Note that
underscores in words are ignored in Markdown Extra.

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

There is <del>nothing</del> <ins>no code</ins> either <em>good</em> or bad, but
<del>thinking</del>

<ins>running it</ins> makes it so.

---

## Table content

### Tables

| Col   | Align Center | Align Right | Align left |
| ----- | :----------: | ----------: | ---------- |
| loren |    loren     |       loren | loren      |
| loren |    loren     |       loren | loren      |
| loren |    loren     |       loren | loren      |
| loren |    loren     |       loren | loren      |
| loren |    loren     |       loren | loren      |

---

## Image and multimedia

![picture alt](https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg 'Title is optional')

<figure>
  <img
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
    alt="Elephant at sunset"
  ></img>
  <figcaption>An elephant at sunset</figcaption>
</figure>

## Forms

---
